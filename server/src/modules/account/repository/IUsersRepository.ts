import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/user";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id_user: string): Promise<User>;
    findByIdAndUpdate(id_user: string, period: string): Promise<User>;
}

export { IUsersRepository };
