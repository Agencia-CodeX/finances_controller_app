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
        IdUsers,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            Email,
            Name,
            Password,
            Avatar,
            IdUsers,
        });

        await this.repository.save(user);
    }

    async findByEmail(Email: string): Promise<User> {
        const user = await this.repository.findOne({ Email });
        return user;
    }

    async findById(IdUsers: string): Promise<User> {
        const user = await this.repository.findOne(IdUsers);

        return user;
    }
}

export { UsersRepository };
