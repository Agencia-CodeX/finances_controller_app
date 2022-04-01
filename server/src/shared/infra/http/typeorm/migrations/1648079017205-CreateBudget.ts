import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBudget1648079017205 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Budget",
                columns: [
                    {
                        name: "IdBudget",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Budget",
                        type: "numeric",
                    },
                    {
                        name: "Period",
                        type: "varchar",
                    },
                    {
                        name: "Created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "IsActive",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "FK_User_IdUser",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_User_Budget",
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
        await queryRunner.dropTable("Budget");
    }
}
