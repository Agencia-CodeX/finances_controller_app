import { getRepository, Repository } from "typeorm";

import { ISpendingCategoryRepository } from "../../../repository/ISpendingCategoryRepository";
import { SpendindCategory } from "../entities/spendindCategory";

class SpendingCategoryRepository implements ISpendingCategoryRepository {
    private repository: Repository<SpendindCategory>;

    constructor() {
        this.repository = getRepository(SpendindCategory);
    }

    async listAll(): Promise<SpendindCategory[]> {
        const spendingCategories = await this.repository.find();

        return spendingCategories;
    }
}

export { SpendingCategoryRepository };
