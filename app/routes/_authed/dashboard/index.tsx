import { createFileRoute } from '@tanstack/react-router'
import { RecentTransactions } from './-recent-transactions'
import { getRecentTransactions } from '@/data/getRecentTransactions'
import { getAnnualCashflow } from '@/data/getAnnualCashflow'
import { getTransactionYearsRange } from '@/data/getTransactionYearsRange'

export const Route = createFileRoute('/_authed/dashboard/')({
  component: RouteComponent,
  loader: async () => {
    const [transactions, cashflow] = await Promise.all([
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
    }
  }
})

function RouteComponent() {
  const {transactions, cashflow} = Route.useLoaderData()
  console.log({cashflow})
  return <div className='max-w-screen-xl mx-auto py-5'>
    <h1 className='text-4xl font-medium pb-5'>Dashboard</h1>
    <RecentTransactions 
      transactions={transactions}
    />
  </div>
}
