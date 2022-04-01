import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/account/infra/typeorm/repository/UsersRepository";
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

    if (!authHeader) {
        throw new AppError("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "fc31c542ce5321caaf29f7c9664d64e0"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("Users does not exists!");
        }
        request.user = {
            id: user_id,
        };
        next();
    } catch {
        throw new AppError("Invalid token!");
    }
}
