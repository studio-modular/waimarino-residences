import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
     ALTER TABLE "files" DROP COLUMN "prefix" varchar;
`);
}

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
     ALTER TABLE "files" ADD COLUMN "prefix" varchar;
`);
}
