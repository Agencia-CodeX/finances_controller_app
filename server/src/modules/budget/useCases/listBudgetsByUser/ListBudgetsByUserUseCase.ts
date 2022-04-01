import { inject, injectable } from "tsyringe";

import { Budget } from "../../infra/typeorm/entities/budget";
import { IBudgetRepository } from "../../repository/IBudgetRepository";

@injectable()
class ListBudgetsByUserUseCase {
    constructor(
        @inject("BudgetRepository")
        private budgetRepository: IBudgetRepository
    ) {}

    async execute(IdUsers: string): Promise<Budget[]> {
        const budgets = await this.budgetRepository.findByUserId(IdUsers);

        return budgets;
    }
}

export { ListBudgetsByUserUseCase };
