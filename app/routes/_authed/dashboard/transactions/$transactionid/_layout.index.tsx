import { TransactionForm } from '@/components/transaction-form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/$transactionid/_layout/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card className='max-w-screen-md mt-4'>
      <CardHeader>
        <CardTitle>Edit Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        Test
      </CardContent>
    </Card>
  )
}
