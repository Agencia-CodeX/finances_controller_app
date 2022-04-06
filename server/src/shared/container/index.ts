import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/infra/typeorm/repository/UsersRepository";
import { IUsersRepository } from "../../modules/account/repository/IUsersRepository";
import { BudgetRepository } from "../../modules/budget/infra/typeorm/repository/BudgetRepository";
import { IBudgetRepository } from "../../modules/budget/repository/IBudgetRepository";
import { SpendingCategoryRepository } from "../../modules/spendingCategory/infra/typeorm/repository/SpendingCategoryRepository";
import { ISpendingCategoryRepository } from "../../modules/spendingCategory/repository/ISpendingCategoryRepository";
import { UserSpendingCategoryRepository } from "../../modules/userSpendingCategory/infra/typeorm/repository/UserSpendingCategoryRepository";
import { IUserSpendingCategoryRepository } from "../../modules/userSpendingCategory/repository/IUserSpendingCategoryRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IBudgetRepository>(
    "BudgetRepository",
    BudgetRepository
);

container.registerSingleton<ISpendingCategoryRepository>(
    "SpendingCategoryRepository",
    SpendingCategoryRepository
);

container.registerSingleton<IUserSpendingCategoryRepository>(
    "UserSpendingCategoryRepository",
    UserSpendingCategoryRepository
);
