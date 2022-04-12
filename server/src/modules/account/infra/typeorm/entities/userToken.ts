import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Users } from "./user";

@Entity("User_token")
class UserTokens {
    @PrimaryColumn()
    TokenId: string;

    @Column()
    Refresh_token: string;

    @Column()
    FK_User_IdUser: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: "FK_User_IdUser" })
    user: Users;

    @Column()
    Expires_date: Date;

    @Column()
    Created_at: Date;

    constructor() {
        if (!this.TokenId) {
            this.TokenId = uuidv4();
        }
    }
}

export { UserTokens };
