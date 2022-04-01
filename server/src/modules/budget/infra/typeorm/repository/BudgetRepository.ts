import { getRepository, Repository } from "typeorm";

import { ICreateBudgetDTO } from "../../../dtos/ICreateBudgetDTO";
import { IBudgetRepository } from "../../../repository/IBudgetRepository";
import { Budget } from "../entities/budget";

class BudgetRepository implements IBudgetRepository {
    private repository: Repository<Budget>;

    constructor() {
        this.repository = getRepository(Budget);
    }

    async create({
        Budget,
        Period,
        FK_User_IdUser,
    }: ICreateBudgetDTO): Promise<Budget> {
        const budget = this.repository.create({
            Budget,
            Period,
            FK_User_IdUser,
        });

        await this.repository.save(budget);

        return budget;
    }

    async findAndUpdate(IsActive: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ IsActive })
            .where("IsActive = true")
            .setParameters({ IsActive })
            .execute();
    }

    async findByUserId(FK_User_IdUser: string): Promise<Budget[]> {
        const budgets = await this.repository.find({
            where: { FK_User_IdUser },
            relations: ["user"],
        });

        return budgets;
    }
}

export { BudgetRepository };
