import { inject, injectable } from "tsyringe";

import { ISpendingCategoryRepository } from "../../repository/ISpendingCategoryRepository";

interface IRequest {
    Name: string;
    Icon: string;
    Description: string;
}

@injectable()
class CreateSpendingCategoriesUseCase {
    constructor(
        @inject("SpendingCategoryRepository")
        private spendingCategoryRepository: ISpendingCategoryRepository
    ) {}

    async execute({ Description, Icon, Name }: IRequest) {
        await this.spendingCategoryRepository.create({
            Name,
            Icon,
            Description,
        });
    }
}

export { CreateSpendingCategoriesUseCase };
