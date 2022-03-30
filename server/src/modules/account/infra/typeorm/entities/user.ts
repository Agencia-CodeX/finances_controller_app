import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("User")
class User {
    @PrimaryColumn()
    IdUsers: string;

    @Column()
    Name: string;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @Column()
    Avatar: string;

    @Column()
    IsAdmin: boolean;

    @CreateDateColumn()
    Created_at: Date;

    constructor() {
        if (!this.IdUsers) {
            this.IdUsers = uuidV4();
        }
    }
}

export { User };
