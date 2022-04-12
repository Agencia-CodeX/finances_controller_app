import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/App.Error";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { IUserTokenRepository } from "../../repository/IUserTokenRepository";

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
    Refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UserTokenRepository")
        private userTokenRepository: IUserTokenRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute({ Email, Password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(Email);
        const {
            expires_in_refresh_token,
            expires_in_token,
            expires_refresh_token_days,
            secret_token,
            secrete_refresh_token,
        } = auth;
        if (!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(Password, user.Password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, secret_token, {
            subject: user.IdUsers,
            expiresIn: expires_in_token,
        });

        const Refresh_token = sign({ Email }, secrete_refresh_token, {
            subject: user.IdUsers,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        );

        await this.userTokenRepository.create({
            FK_User_IdUser: user.IdUsers,
            Refresh_token,
            Expires_date: refresh_token_expires_date,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                Name: user.Name,
                Email: user.Email,
                IsVip: user.IsVip,
            },
            Refresh_token,
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
