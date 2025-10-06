import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import numeral from 'numeral'
import { Button } from '@/components/ui/button'

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
        <CardTitle className='flex justify-between'>
          <span>Recent Transactions</span>
          <div className='flex gap-2'>
            <Button asChild>
              View All
            </Button>
            <Button asChild>
              Edit
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!!transactions.length && (
          <Table className='mt-4'>
            <TableHeader>
              <TableRow>
                <TableHead>
                  Date
                </TableHead>
                <TableHead>
                  Description
                </TableHead>
                <TableHead>
                  Type
                </TableHead>
                <TableHead>
                  Category
                </TableHead>
                <TableHead>
                  Amount
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map(transaction => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    {format(transaction.transactionDate, "do MMM yyyy")}
                  </TableCell>
                  <TableCell>
                    {transaction.description}
                  </TableCell>
                  <TableCell className='uppercase'>
                    <Badge className={
                      transaction.transactionType === 'income'
                      ? 'bg-green-400'
                      : 'bg-red-400'
                    }>
                      {transaction.transactionType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {transaction.category}
                  </TableCell>
                  <TableCell>
                    £{numeral(transaction.amount).format('0,0[.]00')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}