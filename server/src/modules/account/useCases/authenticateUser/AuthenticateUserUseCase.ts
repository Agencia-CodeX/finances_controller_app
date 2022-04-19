import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/App.Error";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { IUserTokenRepository } from "../../repository/IUserTokenRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
        is_vip: boolean;
    };
    token: string;
    refresh_token: string;
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

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        const {
            expires_in_refresh_token,
            expires_in_token,
            expires_refresh_token_days,
            secret_token,
            secrete_refresh_token,
        } = auth;
        if (!user) {
            throw new AppError("email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("email or password incorrect!");
        }

        const token = sign({}, secret_token, {
            subject: user.id_user,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ email }, secrete_refresh_token, {
            subject: user.id_user,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        );

        await this.userTokenRepository.create({
            fk_user_id_user: user.id_user,
            refresh_token,
            expires_date: refresh_token_expires_date,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
                is_vip: user.is_vip,
            },
            refresh_token,
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
