import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("Spending Categories")
class SpendindCategory {
    @PrimaryColumn()
    IdCategory: string;

    @Column()
    Name: string;

    @Column()
    Icon: string;

    @Column()
    Description: string;

    @CreateDateColumn()
    Created_at: Date;

    constructor() {
        if (!this.IdCategory) {
            this.IdCategory = uuidv4();
        }
    }
}

export { SpendindCategory };
