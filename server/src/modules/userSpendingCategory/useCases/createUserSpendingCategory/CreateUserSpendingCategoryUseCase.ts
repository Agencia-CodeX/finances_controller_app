import { inject, injectable } from "tsyringe";

import { IUserSpendingCategoryRepository } from "../../repository/IUserSpendingCategoryRepository";

interface IRequest {
    usersCategories: {
        FK_SpendingCategory_IdCategory: string;
    }[];
    FK_User_IdUser: string;
}

@injectable()
class CreateUserSpendingCategoryUseCase {
    constructor(
        @inject("UserSpendingCategoryRepository")
        private userSpendingCategoryRepository: IUserSpendingCategoryRepository
    ) {}

    async execute({ usersCategories, FK_User_IdUser }: IRequest) {
        usersCategories.map(async (userCategory) => {
            const { FK_SpendingCategory_IdCategory } = userCategory;

            const existUserCategory =
                await this.userSpendingCategoryRepository.findById(
                    FK_SpendingCategory_IdCategory
                );

            if (!existUserCategory) {
                await this.userSpendingCategoryRepository.create({
                    FK_SpendingCategory_IdCategory,
                    FK_User_IdUser,
                });
            }
        });
    }
}
export { CreateUserSpendingCategoryUseCase };
