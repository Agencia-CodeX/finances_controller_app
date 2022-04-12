import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserToken1649723261184 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User_token",
                columns: [
                    {
                        name: "TokenId",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Refresh_token",
                        type: "varchar",
                    },
                    {
                        name: "FK_User_IdUser",
                        type: "uuid",
                    },
                    {
                        name: "Expires_date",
                        type: "timestamp",
                    },
                    {
                        name: "Created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserToken",
                        referencedTableName: "Users",
                        referencedColumnNames: ["IdUsers"],
                        columnNames: ["FK_User_IdUser"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User_token");
    }
}
