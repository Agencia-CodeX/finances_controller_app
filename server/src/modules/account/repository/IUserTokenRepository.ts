import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/userToken";

interface IUserTokenRepository {
    create(data: ICreateUserTokenDTO): Promise<UserTokens>;
    findByUserIdAndRefreshToken(user_id: string): Promise<UserTokens>;
    deleteById(id: string): Promise<void>;
}

export { IUserTokenRepository };
