import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/infra/typeorm/repository/UsersRepository";
import { IUsersRepository } from "../../modules/account/repository/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
