import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/infra/typeorm/repository/UsersRepository";
import { IUsersRepository } from "../../modules/account/repository/IUsersRepository";
import { BudgetRepository } from "../../modules/budget/infra/typeorm/repository/BudgetRepository";
import { IBudgetRepository } from "../../modules/budget/repository/IBudgetRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IBudgetRepository>(
    "BudgetRepository",
    BudgetRepository
);
