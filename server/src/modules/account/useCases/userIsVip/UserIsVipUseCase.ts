import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { Users } from "../../infra/typeorm/entities/user";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    IdUsers: string;
    period: string;
}

@injectable()
class UserIsVipUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ IdUsers, period }: IRequest): Promise<Users> {
        const user = await this.usersRepository.findByIdAndUpdate(
            IdUsers,
            period
        );

        if (!user) {
            throw new AppError("User not found!");
        }

        await this.usersRepository.create(user);

        return user;
    }
}

export { UserIsVipUseCase };
