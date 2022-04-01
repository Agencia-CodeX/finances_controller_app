import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { Users } from "../infra/typeorm/entities/user";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(Email: string): Promise<Users>;
    findById(IdUsers: string): Promise<Users>;
    findByIdAndUpdate(IdUsers: string, period: string): Promise<Users>;
}

export { IUsersRepository };
