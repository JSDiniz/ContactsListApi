import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685199041863 implements MigrationInterface {
    name = 'CreateTables1685199041863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(20) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "imageUrl" character varying, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "imageUrl" character varying, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "usersId" uuid, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(100) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts_phones_phones" ("contactsId" uuid NOT NULL, "phonesId" uuid NOT NULL, CONSTRAINT "PK_68a3f236af4769717cae408b212" PRIMARY KEY ("contactsId", "phonesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0c7d2408c0dff359f0df8801a4" ON "contacts_phones_phones" ("contactsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7238f859f7433b934d8314942a" ON "contacts_phones_phones" ("phonesId") `);
        await queryRunner.query(`CREATE TABLE "contacts_emails_emails" ("contactsId" uuid NOT NULL, "emailsId" uuid NOT NULL, CONSTRAINT "PK_faeda8326882fc0b028b5da25de" PRIMARY KEY ("contactsId", "emailsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_714c652ce187e875759842af40" ON "contacts_emails_emails" ("contactsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_087c04d66d11fb8dd8cbee5943" ON "contacts_emails_emails" ("emailsId") `);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts_phones_phones" ADD CONSTRAINT "FK_0c7d2408c0dff359f0df8801a4d" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contacts_phones_phones" ADD CONSTRAINT "FK_7238f859f7433b934d8314942a0" FOREIGN KEY ("phonesId") REFERENCES "phones"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts_emails_emails" ADD CONSTRAINT "FK_714c652ce187e875759842af40f" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contacts_emails_emails" ADD CONSTRAINT "FK_087c04d66d11fb8dd8cbee59431" FOREIGN KEY ("emailsId") REFERENCES "emails"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_emails_emails" DROP CONSTRAINT "FK_087c04d66d11fb8dd8cbee59431"`);
        await queryRunner.query(`ALTER TABLE "contacts_emails_emails" DROP CONSTRAINT "FK_714c652ce187e875759842af40f"`);
        await queryRunner.query(`ALTER TABLE "contacts_phones_phones" DROP CONSTRAINT "FK_7238f859f7433b934d8314942a0"`);
        await queryRunner.query(`ALTER TABLE "contacts_phones_phones" DROP CONSTRAINT "FK_0c7d2408c0dff359f0df8801a4d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_087c04d66d11fb8dd8cbee5943"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_714c652ce187e875759842af40"`);
        await queryRunner.query(`DROP TABLE "contacts_emails_emails"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7238f859f7433b934d8314942a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0c7d2408c0dff359f0df8801a4"`);
        await queryRunner.query(`DROP TABLE "contacts_phones_phones"`);
        await queryRunner.query(`DROP TABLE "emails"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
