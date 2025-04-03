import { integer, pgTable, text } from 'drizzle-orm/pg-core'

export const categoriesTable = pgTable('categories', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  type: text({
    enum: ['income', 'expense']
  }).notNull()
})