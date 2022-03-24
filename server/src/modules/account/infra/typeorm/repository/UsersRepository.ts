import { getRepository, Repository } from "typeorm";

import { User } from "../../../../../database/infra/typeorm/entities/user";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repository/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        Email,
        Name,
        Password,
        Avatar,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            Email,
            Name,
            Password,
            Avatar,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
