import { inject, injectable } from "tsyringe";

import { IBudgetRepository } from "../../repository/IBudgetRepository";

interface IRequest {
    Budget: number;
    Period: string;
    FK_User_IdUser: string;
}

@injectable()
class CreateBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private budgetRepository: IBudgetRepository
    ) {}

    async execute({ Budget, Period, FK_User_IdUser }: IRequest): Promise<void> {
        await this.budgetRepository.findAndUpdate(false);
        await this.budgetRepository.create({
            Budget,
            Period,
            FK_User_IdUser,
        });
    }
}

export { CreateBudgetUseCase };
