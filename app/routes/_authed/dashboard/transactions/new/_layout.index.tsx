import { TransactionForm, transactionFormSchema } from '@/components/transaction-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCategories } from '@/data/getCategories'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/new/_layout/',
)({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories()
    return {
      categories
    }
  }
})

function RouteComponent() {
  const { categories } = Route.useLoaderData()

  const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {
    console.log('Handle Submit: ', { data })
  }

  return (
    <Card className='max-w-screen-md mt-4'>
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionForm
          categories={categories}
          onSubmit={handleSubmit}
        />
      </CardContent>
    </Card>
  )
}
