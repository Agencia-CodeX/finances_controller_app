import { verify, sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/App.Error";
import { IUserTokenRepository } from "../../repository/IUserTokenRepository";

interface IPayload {
    sub: string;
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UserTokenRepository")
        private userTokenRepository: IUserTokenRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}
    async execute(token: string) {
        const { email, sub } = verify(
            token,
            auth.secrete_refresh_token
        ) as IPayload;
        const user_id = sub;

        const userToken =
            await this.userTokenRepository.findByUserIdAndRefreshToken(
                user_id,
                token
            );

        if (!userToken) {
            throw new AppError("Refresh Token Error!");
        }

        await this.userTokenRepository.deleteById(userToken.id_token);

        const refresh_token = sign({ email }, auth.secrete_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        const expires_date = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        );

        await this.userTokenRepository.create({
            expires_date,
            refresh_token,
            fk_user_id_user: user_id,
        });
        return refresh_token;
    }
}

export { RefreshTokenUseCase };
