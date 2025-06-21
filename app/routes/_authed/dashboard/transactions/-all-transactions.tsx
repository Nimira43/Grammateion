import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

export function AllTransactions({
  month,
  year,
}: {
  month: number
  year: number
}) {
  const selectedDate = new Date(year, month - 1, 1)

  return (
    <Card className='mt-4'>
      <CardHeader>
        <CardTitle
          className='flex justify-between'
        >
          <span className='font-medium'>
            Transactions for {format(selectedDate, 'MMMM yyyy')} 
          </span>
          <div>Select</div>
          
        </CardTitle>
      </CardHeader>
    </Card>
  )
}