import { sql } from "drizzle-orm";
import { bigint, index, mysqlTableCreator, timestamp, varchar } from "drizzle-orm/mysql-core";

export const mysqlTable = mysqlTableCreator((name) => `chirpy_${name}`);

export const posts = mysqlTable(
	"post",
	{
		id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
		name: varchar("name", { length: 256 }),
		createdAt: timestamp("created_at")
			.default(sql`CURRENT_TIMESTAMP`)
			.notNull(),
		updatedAt: timestamp("updatedAt").onUpdateNow()
	},
	(example) => ({
		nameIndex: index("name_idx").on(example.name)
	})
);

export const users = mysqlTable(
	"user",
	{
		id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
		name: varchar("name", { length: 256 }),
		createdAt: timestamp("created_at")
			.default(sql`CURRENT_TIMESTAMP`)
			.notNull(),
		updatedAt: timestamp("updatedAt").onUpdateNow()
	},
	(example) => ({
		nameIndex: index("name_idx").on(example.name)
	})
);
