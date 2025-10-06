import authMiddleware from '@/authMiddleware'
import { db } from '@/db'
import { transactionsTable, categoriesTable } from '@/db/schema'
import { createServerFn } from '@tanstack/start'
import { eq } from 'drizzle-orm'

export const getRecentTransactions = createServerFn({
  method: 'GET'
})
  .middleware([authMiddleware])
  .handler(async ({context}) => {
    const transactions = await db
      .select({
        id: transactionsTable.id,
        description: transactionsTable.description,
        amount: transactionsTable.amount,
        transactionDate: transactionsTable.transactionDate,
        category: categoriesTable.name,
        transactionType: categoriesTable.type
      })
      .from(transactionsTable)
      .where(eq(transactionsTable.userId, context.userId))
  })