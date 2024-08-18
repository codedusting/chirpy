import { sql } from "drizzle-orm";
import { index, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const roleEnum = pgEnum("role", ["ADMIN", "FREE_USER", "PREMIUM_USER", "PREMIUM_PLUS_USER"]);

export const users = pgTable(
	"users",
	{
		id: text("id")
			.$defaultFn(() => uuidv7())
			.primaryKey()
			.notNull(),
		username: text("username").unique().notNull(),
		name: text("name"),
		avatarUrl: text("avatar_url"),
		email: text("email").unique().notNull(),
		phone: text("phone"),
		createdAt: timestamp("created_at", { mode: "string", withTimezone: true })
			.defaultNow()
			.notNull(),
		updatedAt: timestamp("updated_at", { mode: "string", withTimezone: true })
			.defaultNow()
			.notNull()
			.$onUpdate(() => sql`now()`),
		role: roleEnum("role").default("FREE_USER").notNull()
	},
	(table) => {
		return {
			idx: index("idx").on(table.id),
			usernamex: index("usernamex").on(table.username)
		};
	}
);
