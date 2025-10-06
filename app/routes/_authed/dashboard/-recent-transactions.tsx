import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentTransactions({
  transactions
}: {
  transactions: {
    id: number
    description: string
    amount: string
    category: string | null
    transactionType: 'income' | 'expense' | null
    transactionDate: string
  }[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>Transactions</CardContent>
    </Card>
  )
}