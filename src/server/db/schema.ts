import {
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core/columns";
import { mysqlTable } from "drizzle-orm/mysql-core/table";

export const notes = mysqlTable("notes", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 191 }).notNull(),
  slug: varchar("slug", { length: 191 }).notNull(),
  title: text("title").notNull(),
  text: text("text").default(""),
  created_at: timestamp("created_at").notNull().defaultNow().onUpdateNow(),
});
