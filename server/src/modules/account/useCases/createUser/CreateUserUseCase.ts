import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IResponse {
    token: string;
    user: {
        Name: string;
        Email: string;
        IsVip: boolean;
    };
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        Email,
        Name,
        Password,
    }: ICreateUserDTO): Promise<IResponse> {
        const userAlreadyExists = await this.usersRepository.findByEmail(Email);
        if (userAlreadyExists) {
            throw new AppError("Users already exists!", 401);
        }

        const passwordHash = await hash(Password, 8);
        const user = await this.usersRepository.create({
            Email,
            Name,
            Password: passwordHash,
        });

        delete user.Password;

        const token = sign({}, "fc31c542ce5321caaf29f7c9664d64e0", {
            subject: user.IdUsers,
            expiresIn: "1d",
        });

        const response = {
            token,
            user,
        };

        delete user.Password;

        return response;
    }
}

export { CreateUserUseCase };
