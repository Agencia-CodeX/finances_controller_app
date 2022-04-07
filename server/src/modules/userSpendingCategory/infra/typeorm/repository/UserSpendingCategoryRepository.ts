import { getRepository, Repository } from "typeorm";

import { ICreateUserSpendingCategoryDTO } from "../../../dtos/ICreateUserSpendingCategoryDTO";
import { IUserSpendingCategoryRepository } from "../../../repository/IUserSpendingCategoryRepository";
import { UserSpendingCategory } from "../entities/UserSpendingCategory";

class UserSpendingCategoryRepository
    implements IUserSpendingCategoryRepository
{
    private repository: Repository<UserSpendingCategory>;
    constructor() {
        this.repository = getRepository(UserSpendingCategory);
    }

    async create({
        FK_SpendingCategory_IdCategory,
        FK_User_IdUser,
    }: ICreateUserSpendingCategoryDTO): Promise<UserSpendingCategory> {
        const userSpendingCategory = this.repository.create({
            FK_SpendingCategory_IdCategory,
            FK_User_IdUser,
        });

        await this.repository.save(userSpendingCategory);

        return userSpendingCategory;
    }
}

export { UserSpendingCategoryRepository };
