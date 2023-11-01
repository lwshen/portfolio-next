import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import { db } from ".";

export const migrationPath = path.resolve(".drizzle", "migrations");

console.log("⏳ Running migrations...");

const start = Date.now();
migrate(db, {
  migrationsFolder: migrationPath,
})
  .then(() => {
    const end = Date.now();

    console.log("✅ Migrations completed in", end - start, "ms");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Migration failed", err);
    process.exit(1);
  });
