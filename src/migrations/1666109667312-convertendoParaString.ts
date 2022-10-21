import { MigrationInterface, QueryRunner } from "typeorm";

export class convertendoParaString1666109667312 implements MigrationInterface {
    name = 'convertendoParaString1666109667312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" integer NOT NULL`);
    }

}
