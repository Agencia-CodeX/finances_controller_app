import { inject, injectable } from "tsyringe";

import { UserSpendingCategory } from "../../infra/typeorm/entities/UserSpendingCategory";
import { IUserSpendingCategoryRepository } from "../../repository/IUserSpendingCategoryRepository";

interface IRequest {
    FK_SpendingCategory_IdCategory: string;
    FK_User_IdUser: string;
}

@injectable()
class CreateUserSpendingCategoryUseCase {
    constructor(
        @inject("UserSpendingCategoryRepository")
        private userSpendingCategoryRepository: IUserSpendingCategoryRepository
    ) {}

    async execute({
        FK_SpendingCategory_IdCategory,
        FK_User_IdUser,
    }: IRequest): Promise<UserSpendingCategory> {
        const userSpendingCategory =
            await this.userSpendingCategoryRepository.create({
                FK_SpendingCategory_IdCategory,
                FK_User_IdUser,
            });

        return userSpendingCategory;
    }
}

export { CreateUserSpendingCategoryUseCase };
