import * as migration_20250403_093027_initial_migrate from "./20250403_093027_initial_migrate";
import * as migration_20250403_103619_added_prefix from "./20250403_103619_added_prefix";
import * as migration_20250404_032601_added_files from "./20250404_032601_added_files";

export const migrations = [
  {
    down: migration_20250403_093027_initial_migrate.down,
    name: "20250403_093027_initial_migrate",
    up: migration_20250403_093027_initial_migrate.up,
  },
  {
    down: migration_20250403_103619_added_prefix.down,
    name: "20250403_103619_added_prefix",
    up: migration_20250403_103619_added_prefix.up,
  },
  {
    down: migration_20250404_032601_added_files.down,
    name: "20250404_032601_added_files",
    up: migration_20250404_032601_added_files.up,
  },
];
