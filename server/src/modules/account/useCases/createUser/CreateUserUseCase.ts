import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

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
        Avatar,
    }: ICreateUserDTO): Promise<void> {
        const passwordHash = await hash(Password, 8);
        await this.usersRepository.create({
            Email,
            Name,
            Password: passwordHash,
            Avatar,
        });
    }
}

export { CreateUserUseCase };
