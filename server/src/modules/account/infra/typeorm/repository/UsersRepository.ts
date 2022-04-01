import moment from "moment";
import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/App.Error";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repository/IUsersRepository";
import { Users } from "../entities/user";

class UsersRepository implements IUsersRepository {
    private repository: Repository<Users>;
    constructor() {
        this.repository = getRepository(Users);
    }

    async create({
        Email,
        Name,
        Password,
        Avatar,
        IdUsers,
        IsVip,
        VipExpiresDate,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            Email,
            Name,
            Password,
            Avatar,
            IdUsers,
            IsVip,
            VipExpiresDate,
        });

        await this.repository.save(user);
    }

    async findByEmail(Email: string): Promise<Users> {
        const user = await this.repository.findOne({ Email });
        return user;
    }

    async findById(IdUsers: string): Promise<Users> {
        const user = await this.repository.findOne(IdUsers);

        return user;
    }

    async findByIdAndUpdate(IdUsers: string, period: string): Promise<Users> {
        const user = await this.repository.findOne(IdUsers);
        user.IsVip = true;

        if (period === "mensal") {
            const dateNow = moment();
            const dateAfter = dateNow.add(1, "month").toDate();
            user.VipExpiresDate = dateAfter;
        } else if (period === "anual") {
            const dateNow = moment();
            const dateAfter = dateNow.add(1, "year").toDate();
            user.VipExpiresDate = dateAfter;
        } else {
            throw new AppError("Coloca 'mensal' ou 'anual ai ne meu amigo'");
        }

        return user;
    }
}

export { UsersRepository };
