import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("Users Spending Categories")
class UserSpendingCategory {
    @PrimaryColumn()
    UserSpendingCategoryId: string;

    @PrimaryColumn()
    FK_SpendingCategory_IdCategory: string;

    @Column()
    FK_User_IdUser: string;

    constructor() {
        if (!this.UserSpendingCategoryId) {
            this.UserSpendingCategoryId = uuidv4();
        }
    }
}

export { UserSpendingCategory };
