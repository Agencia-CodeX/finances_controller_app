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

    async findById(
        FK_SpendingCategory_IdCategory: string
    ): Promise<UserSpendingCategory> {
        const userCategory = await this.repository.findOne({
            FK_SpendingCategory_IdCategory,
        });

        return userCategory;
    }

    async listByDate(
        user_id: string,
        initialDate?: Date,
        endDate?: Date
    ): Promise<UserSpendingCategory[]> {
        const userSpendingCategoriesQuery = this.repository
            .createQueryBuilder("c")
            .where('"FK_User_IdUser" = :id', { id: user_id });

        if (initialDate) {
            userSpendingCategoriesQuery.andWhere(
                '"Created_at" > :initialDate',
                {
                    initialDate,
                }
            );
        }
        if (endDate) {
            userSpendingCategoriesQuery.andWhere('"Created_at" < :endDate', {
                endDate,
            });
        }

        const userSpendingCategories =
            await userSpendingCategoriesQuery.getMany();

        return userSpendingCategories;
    }
}

export { UserSpendingCategoryRepository };
