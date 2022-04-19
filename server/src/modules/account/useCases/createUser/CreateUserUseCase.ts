import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
        is_vip: boolean;
    };
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        email,
        name,
        password,
    }: ICreateUserDTO): Promise<IResponse> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already exists!", 401);
        }

        const passwordHash = await hash(password, 8);
        const user = await this.usersRepository.create({
            email,
            name,
            password: passwordHash,
        });

        delete user.password;

        const token = sign({}, "fc31c542ce5321caaf29f7c9664d64e0", {
            subject: user.id_user,
            expiresIn: "1d",
        });

        const response = {
            token,
            user,
        };

        delete user.password;

        return response;
    }
}

export { CreateUserUseCase };
