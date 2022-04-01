import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/App.Error";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ Email, Name, Password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(Email);
        if (userAlreadyExists) {
            throw new AppError("Users already exists!");
        }
        const passwordHash = await hash(Password, 8);
        await this.usersRepository.create({
            Email,
            Name,
            Password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
