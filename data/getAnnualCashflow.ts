import authMiddleware from '@/authMiddleware'
import { db } from '@/db'
import { categoriesTable, transactionsTable } from '@/db/schema'
import { createServerFn } from '@tanstack/start'
import { sql } from 'drizzle-orm'
import { z } from 'zod'

const schema = z.object({
  year: z.number()
})

export const getAnnualCashflow = createServerFn({
  method: 'GET'
})
  .middleware([authMiddleware])
  .validator((data: z.infer<typeof schema>) =>schema.parse(data))
  .handler(async () => {
    const cashflow = await db.select({
      month: sql<string>`EXTRACT(MONTH FROM ${transactionsTable.transactionDate})`,
      totalIncome: sql<string>`SUM(CASE WHEN ${categoriesTable.type} = 'income' THEN ${transactionsTable.amount} ELSE 0 END)`,
    })
  })