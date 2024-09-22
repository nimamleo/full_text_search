import { MigrationInterface, QueryRunner } from 'typeorm';

export class TextSearch1727032199524 implements MigrationInterface {
  name = 'TextSearch1727032199524';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table users add column doc_with_index tsvector;`,
    );
    await queryRunner.query(
      `update users set doc_with_index = to_tsvector(coalesce(name, '') || ' ' || coalesce(username , '') || ' ' || coalesce(email , ''));`,
    );
    await queryRunner.query(
      `create index doc_index on users using gin (doc_with_index);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "doc_with_index"`);
  }
}
