import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1648078871641 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                    {
                        name: "IdUsers",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Name",
                        type: "varchar",
                    },
                    {
                        name: "Email",
                        type: "varchar",
                    },
                    {
                        name: "Password",
                        type: "varchar",
                    },
                    {
                        name: "Avatar",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "IsAdmin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "IsVip",
                        type: "boolean",
                    },
                    {
                        name: "VipExpiresDate",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "Created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
    }
}
