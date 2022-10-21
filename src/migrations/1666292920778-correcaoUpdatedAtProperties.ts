import { MigrationInterface, QueryRunner } from "typeorm";

export class correcaoUpdatedAtProperties1666292920778 implements MigrationInterface {
    name = 'correcaoUpdatedAtProperties1666292920778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
