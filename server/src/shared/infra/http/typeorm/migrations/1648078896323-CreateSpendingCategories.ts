import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpendingCategories1648078896323
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Spending Categories",
                columns: [
                    {
                        name: "IdCategory",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "Name",
                        type: "varchar",
                    },
                    {
                        name: "Icon",
                        type: "varchar",
                    },
                    {
                        name: "Description",
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
        queryRunner.dropTable("Spending Categories");
    }
}
