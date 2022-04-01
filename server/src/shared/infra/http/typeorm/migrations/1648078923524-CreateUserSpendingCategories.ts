import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserSpendingCategories1648078923524
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users Spending Categories",
                columns: [
                    {
                        name: "FK_SpendingCategory_IdCategory",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "FK_User_IdUser",
                        type: "uuid",
                        isPrimary: true,
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_SpendingCategory_USP",
                        referencedTableName: "Spending Categories",
                        referencedColumnNames: ["IdCategory"],
                        columnNames: ["FK_SpendingCategory_IdCategory"],
                        onDelete: "CASCADE",
                    },
                    {
                        name: "FK_User_USP",
                        referencedTableName: "Users",
                        referencedColumnNames: ["IdUsers"],
                        columnNames: ["FK_User_IdUser"],
                        onDelete: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users Spending Categories");
    }
}
