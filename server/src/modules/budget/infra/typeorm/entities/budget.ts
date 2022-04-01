import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Users } from "../../../../account/infra/typeorm/entities/user";

@Entity("Budget")
class Budget {
    @PrimaryColumn()
    IdBudget: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: "FK_User_IdUser" })
    user: Users;

    @Column()
    FK_User_IdUser: string;

    @Column()
    Budget: number;

    @Column()
    Period: string;

    @Column()
    Created_at: Date;

    @Column()
    IsActive: boolean;

    @Column()
    FinalDate: Date;

    constructor() {
        if (!this.IdBudget) {
            this.IdBudget = uuidv4();
        }
    }
}

export { Budget };
