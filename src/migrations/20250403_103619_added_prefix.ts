import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
}

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Migration code
}
