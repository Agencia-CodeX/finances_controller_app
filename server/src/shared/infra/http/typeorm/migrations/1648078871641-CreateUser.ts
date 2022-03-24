import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1648078871641 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "IdUsers",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "Email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "Password",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "Avatar",
                        type: "varchar",
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
        await queryRunner.dropTable("User");
    }
}
