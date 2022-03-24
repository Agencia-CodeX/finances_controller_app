import { User } from "../../../database/infra/typeorm/entities/user";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(Email: string): Promise<User>;
}

export { IUsersRepository };
