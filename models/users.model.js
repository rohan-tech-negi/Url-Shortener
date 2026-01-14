import { 
  pgTable, 
  uuid, 
  varchar, 
  text, 
  timestamp 
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    
    firstName: varchar("first_name", { length: 55 }).notNull(),
    
    // Fixed: changed column name from "first_name" to "last_name"
    lastName: varchar("last_name", { length: 55 }), 
    
    email: varchar("email", { length: 255 }).unique().notNull(),

    password: text("password").notNull(),

    salt: text("salt").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});