import { pgTable, integer } from "drizzle-orm/pg-core"

export const users = pgTable('users', {
  id: integer()
});