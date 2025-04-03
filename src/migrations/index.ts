import * as migration_20250403_093027_initial_migrate from "./20250403_093027_initial_migrate";

export const migrations = [
  {
    down: migration_20250403_093027_initial_migrate.down,
    name: "20250403_093027_initial_migrate",
    up: migration_20250403_093027_initial_migrate.up,
  },
];
