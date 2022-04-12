import { getRepository, Repository } from "typeorm";

import { ICreateUserTokenDTO } from "../../../dtos/ICreateUserTokenDTO";
import { IUserTokenRepository } from "../../../repository/IUserTokenRepository";
import { UserTokens } from "../entities/userToken";

class UserTokenRepository implements IUserTokenRepository {
    private repository: Repository<UserTokens>;
    constructor() {
        this.repository = getRepository(UserTokens);
    }

    async create({
        FK_User_IdUser,
        Expires_date,
        Refresh_token,
    }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            Expires_date,
            FK_User_IdUser,
            Refresh_token,
        });

        await this.repository.save(userToken);

        return userToken;
    }
}

export { UserTokenRepository };
