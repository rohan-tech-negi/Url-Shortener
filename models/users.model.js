const { varchar } = require("drizzle-orm/pg-core")
const { timestamp } = require("drizzle-orm/pg-core")
const { text } = require("drizzle-orm/pg-core")
const { uuid } = require("drizzle-orm/pg-core")
const {pgTable} = require("drizzle-orm/pg-core")

export const usersTable = pgTable("users",{
    id:uuid().primaryKey().defaultRandom(),
    firstName:varchar("first_name" ,{length:55}).notNull(),
    lastName:varchar("first_name" ,{length:55}),
    email:varchar({length:255}).unique().notNull(),

    password:text().notNull(),

    salt:text().notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(()=> new Date()),

})

