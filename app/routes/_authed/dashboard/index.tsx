import { createFileRoute } from '@tanstack/react-router'
import { RecentTransactions } from './-recent-transactions'
import { getRecentTransactions } from '@/data/getRecentTransactions'
import { getAnnualCashflow } from '@/data/getAnnualCashflow'
import { getTransactionYearsRange } from '@/data/getTransactionYearsRange'
import { Cashflow } from './-cashflow'
import { z } from 'zod'

const searchSchema = z.object({
  cfyear: z.number()
})

export const Route = createFileRoute('/_authed/dashboard/')({
  validateSearch:
  component: RouteComponent,
  loader: async () => {
    const [
      transactions, 
      cashflow,
      yearsRange
    ] = await Promise.all([
      getRecentTransactions(),  
      getAnnualCashflow({
        data: {
          year: 2025,
        },
      }),
      getTransactionYearsRange()
    ])

    console.log(cashflow)
    return {
      cashflow,
      transactions,
      yearsRange
    }
  }
})

function RouteComponent() {
  const {transactions, cashflow, yearsRange} = Route.useLoaderData()
  console.log({cashflow})
  return <div className='max-w-screen-xl mx-auto py-5'>
    <h1 className='text-4xl font-medium pb-5'>Dashboard</h1>
    <Cashflow 
      yearsRange={yearsRange}
    />
    <RecentTransactions 
      transactions={transactions}
    />
  </div>
}
