import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer } from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useNavigate } from '@tanstack/react-router'
import { BarChart } from 'recharts'

export function Cashflow({
  yearsRange,
  year,
  annualCashflow
}: {
  yearsRange: number[],
  year: number,
  annualCashflow: {
    month: number
    income: number
    expenses: number
  }[]
}) {
  const navigate = useNavigate()
  
  return (
    <Card className='mb-5'>
      <CardHeader>
        <CardTitle className='flex justify-between'>
          <span>Cashflow</span>
          <div>
            <Select 
              defaultValue={year.toString()}
              onValueChange={(value) => {
                navigate({
                  to: '/dashboard',
                  search: {
                    cfyear: Number(value)
                  }
                })
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearsRange.map(year => 
                  <SelectItem
                    key={year}
                    value={year.toString()}
                  >
                    {year}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            income: {
              label:'Income',
              color: '#16a34a'
            },
            expenses: {
              label:'Expenses',
              color: '#ff4500'
            },
          }}
          className='w-full h-[300px]'
        >
          <BarChart 
            data={annualCashflow}  
          >

          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}