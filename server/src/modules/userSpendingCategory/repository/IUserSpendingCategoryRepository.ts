import { ICreateUserSpendingCategoryDTO } from "../dtos/ICreateUserSpendingCategoryDTO";
import { UserSpendingCategory } from "../infra/typeorm/entities/UserSpendingCategory";

interface IUserSpendingCategoryRepository {
    create(data: ICreateUserSpendingCategoryDTO): Promise<UserSpendingCategory>;
    findById(
        FK_SpendingCategory_IdCategory: string
    ): Promise<UserSpendingCategory>;
}

export { IUserSpendingCategoryRepository };
