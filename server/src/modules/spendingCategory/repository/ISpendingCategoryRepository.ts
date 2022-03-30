import { SpendindCategory } from "../infra/typeorm/entities/spendindCategory";

interface ISpendingCategoryRepository {
    listAll(): Promise<SpendindCategory[]>;
}

export { ISpendingCategoryRepository };
