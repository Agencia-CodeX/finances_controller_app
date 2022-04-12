import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/userToken";

interface IUserTokenRepository {
    create(data: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUserTokenRepository };
