import { ICreateUserSpendingCategoryDTO } from "../dtos/ICreateUserSpendingCategoryDTO";
import { UserSpendingCategory } from "../infra/typeorm/entities/UserSpendingCategory";

interface IUserSpendingCategoryRepository {
    create(data: ICreateUserSpendingCategoryDTO): Promise<UserSpendingCategory>;
}

export { IUserSpendingCategoryRepository };
