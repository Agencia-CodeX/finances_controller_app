import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { UserTokenRepository } from "../../../../modules/account/infra/typeorm/repository/UserTokenRepository";
import { AppError } from "../../../errors/App.Error";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;
    const userTokenRepository = new UserTokenRepository();

    if (!authHeader) {
        throw new AppError("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
        const user = userTokenRepository.findByUserIdAndRefreshToken(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }
        request.user = {
            id: user_id,
        };
        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
