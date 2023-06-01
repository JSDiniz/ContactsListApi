import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685588321765 implements MigrationInterface {
    name = 'CreateTables1685588321765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "portfolioUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "portfolioUrl"`);
    }

}
