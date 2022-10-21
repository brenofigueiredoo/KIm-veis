import { MigrationInterface, QueryRunner } from "typeorm";

export class relacaoNtoN1666211673196 implements MigrationInterface {
    name = 'relacaoNtoN1666211673196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_user_properties" ("id" uuid NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "propertiesId" uuid, "userId" uuid, CONSTRAINT "PK_a5aea5dea185dc4f29bfa48fc5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d7a88d4783fda38b7415ab28bbd" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d7a88d4783fda38b7415ab28bbd"`);
        await queryRunner.query(`DROP TABLE "schedules_user_properties"`);
    }

}
