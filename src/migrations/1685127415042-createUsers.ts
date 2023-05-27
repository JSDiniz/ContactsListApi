import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1685127415042 implements MigrationInterface {
    name = 'CreateUsers1685127415042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(20) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "imageUrl" character varying, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
