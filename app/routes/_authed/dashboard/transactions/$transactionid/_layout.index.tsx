import { TransactionForm } from '@/components/transaction-form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getCategories } from '@/data/getCategories'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/$transactionid/_layout/',
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
  const handleSubmit = async () => {}

  return (
    <Card className='max-w-screen-md mt-4'>
      <CardHeader>
        <CardTitle>Edit Transaction</CardTitle>
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
