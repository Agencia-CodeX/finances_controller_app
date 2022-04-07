import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    Email: string;
    Password: string;
}

interface IResponse {
    user: {
        Name: string;
        Email: string;
        IsVip: boolean;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ Email, Password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(Email);

        if (!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(Password, user.Password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "fc31c542ce5321caaf29f7c9664d64e0", {
            subject: user.IdUsers,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                Name: user.Name,
                Email: user.Email,
                IsVip: user.IsVip,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
