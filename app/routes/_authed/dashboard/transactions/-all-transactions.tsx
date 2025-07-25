import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import { useState } from 'react'

export function AllTransactions({
  yearsRange,
  month,
  year,
}: {
  yearsRange: number[]
  month: number
  year: number
}) {
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedYear, setSelectedYear] = useState(year)
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
          <div className='flex gap-1'>
            <Select 
              value={selectedMonth.toString()}
              onValueChange={value => setSelectedMonth(Number(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({length: 12}).map((_, i) => (
                  <SelectItem 
                    key= {i} 
                    value={`${i + 1}`}
                  >
                    {format(new Date(selectedDate.getFullYear(), i, 1), 'MMMM')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select 
              value={selectedYear.toString()}
              onValueChange={value => setSelectedYear(Number(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearsRange.map((year) => (
                  <SelectItem
                    value={year.toString()}
                    key={year}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button asChild>
              <Link 
                to='/dashboard/transactions'
                search={{
                  month: selectedMonth,
                  year: selectedYear,
                }}
                className='uppercase'
              >
                Submit
              </Link>      
            </Button>
          </div>
        </CardTitle>
        
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link 
            to='/dashboard/transactions/new'
            className='uppercase'
          >
              New Transaction
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}