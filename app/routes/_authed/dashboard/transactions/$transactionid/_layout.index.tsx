import { TransactionForm } from '@/components/transaction-form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getCategories } from '@/data/getCategories'
import { getTransaction } from '@/data/getTransaction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/$transactionid/_layout/',
)({
  component: RouteComponent,
  errorComponent: () => {
    return (
      <div className='text-3xl text-dark mt-6'>Something is not right. Transaction not found.</div>
    )
  },
  loader: async ({ params }) => {
    const [categories, transaction] = await Promise.all([
      getCategories(),
      getTransaction({
        data: {
          transactionId: Number(params.transactionid)
        }
      })
    ])

    if (!transaction) {
      throw new Error('Transaction not found.')
    }

    return {
      transaction,
      categories
    }
  }
})

function RouteComponent() {
  const { categories, transaction } = Route.useLoaderData() 
  const handleSubmit = async () => {}

  return (
    <Card className='max-w-screen-md mt-4'>
      <CardHeader>
        <CardTitle>Edit Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionForm
          defaultValues={{
            amount: Number(transaction.amount),
            categoryId: transaction.categoryId,
            description: transaction.description,
            transactionDate: new Date(transaction.transactionDate),
            transactionType: 
              categories.find(
                category => category.id === transaction.categoryId
              )?.type ?? 'income',
          }}
          categories={categories}
          onSubmit={handleSubmit}
        />
      </CardContent>
    </Card>
  )
}
