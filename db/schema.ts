import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const contacts=sqliteTable("contacts",{id:integer("id").primaryKey({autoIncrement:true}),name:text("name").notNull(),phone:text("phone").notNull(),interest:text("interest").notNull(),message:text("message"),createdAt:text("created_at").notNull()});
