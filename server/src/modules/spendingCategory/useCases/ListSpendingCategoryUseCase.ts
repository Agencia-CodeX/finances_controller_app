import { inject, injectable } from "tsyringe";

import { SpendindCategory } from "../infra/typeorm/entities/spendindCategory";
import { ISpendingCategoryRepository } from "../repository/ISpendingCategoryRepository";

@injectable()
class ListSpendingCategoryUseCase {
    constructor(
        @inject("SpendingCategoryRepository")
        private spendingCategoryRepository: ISpendingCategoryRepository
    ) {}

    async execute(): Promise<SpendindCategory[]> {
        const spendingCategories =
            await this.spendingCategoryRepository.listAll();

        return spendingCategories;
    }
}

export { ListSpendingCategoryUseCase };
