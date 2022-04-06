import { getRepository, Repository } from "typeorm";

import { ICreateSpendingCategoryDTO } from "../../../dtos/ICreateSpendingCategoryDTO";
import { ISpendingCategoryRepository } from "../../../repository/ISpendingCategoryRepository";
import { SpendindCategory } from "../entities/spendindCategory";

class SpendingCategoryRepository implements ISpendingCategoryRepository {
    private repository: Repository<SpendindCategory>;

    constructor() {
        this.repository = getRepository(SpendindCategory);
    }

    async listByUser(
        initialDate?: Date,
        endDate?: Date
    ): Promise<SpendindCategory[]> {
        const spendingCategoriesQuery = this.repository.createQueryBuilder("c");

        if (initialDate) {
            spendingCategoriesQuery.andWhere('"Created_at" > :initialDate', {
                initialDate,
            });
        }
        if (endDate) {
            spendingCategoriesQuery.andWhere('"Created_at" < :endDate', {
                endDate,
            });
        }

        const spendingCategories = await spendingCategoriesQuery.getMany();

        return spendingCategories;
    }

    async create({
        Description,
        Icon,
        Name,
    }: ICreateSpendingCategoryDTO): Promise<SpendindCategory> {
        const categorires = this.repository.create({
            Description,
            Icon,
            Name,
        });

        await this.repository.save(categorires);

        return categorires;
    }
}

export { SpendingCategoryRepository };
