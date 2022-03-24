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
