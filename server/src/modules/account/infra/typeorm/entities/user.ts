import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Users")
class Users {
    @PrimaryColumn()
    IdUsers: string;

    @Column()
    Name: string;

    @Column()
    Email: string;

    @Column({ select: false })
    Password: string;

    @Column()
    Avatar: string;

    @Column()
    IsAdmin: boolean;

    @Column()
    IsVip: boolean;

    @Column()
    VipExpiresDate: Date;

    @CreateDateColumn()
    Created_at: Date;

    constructor() {
        if (!this.IdUsers) {
            this.IdUsers = uuidV4();
        }
    }
}

export { Users };
