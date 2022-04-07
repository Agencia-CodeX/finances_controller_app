import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpending1648083152554 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Spending",
                columns: [
                    {
                        name: "IdSpending",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Value",
                        type: "numeric",
                    },
                    {
                        name: "Date",
                        type: "timestamp",
                    },
                    {
                        name: "FK_User_IdUser",
                        type: "uuid",
                    },
                    {
                        name: "FK_SpendingCategory_IdCategory",
                        type: "uuid",
                    },
                    {
                        name: "FK_Budget_IdBudget",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_SpendingCategory_Spending",
                        referencedTableName: "Spending Categories",
                        referencedColumnNames: ["IdCategory"],
                        columnNames: ["FK_SpendingCategory_IdCategory"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_User_Spending",
                        referencedTableName: "Users",
                        referencedColumnNames: ["IdUsers"],
                        columnNames: ["FK_User_IdUser"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_Budget_Spending",
                        referencedTableName: "Budget",
                        referencedColumnNames: ["IdBudget"],
                        columnNames: ["FK_Budget_IdBudget"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Spending");
    }
}
