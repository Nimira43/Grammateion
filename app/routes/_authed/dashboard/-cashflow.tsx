import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useNavigate } from '@tanstack/react-router'
import { format } from 'date-fns'
import numeral from 'numeral'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'

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
              color: '#b91c1c'
            },
          }}
          className='w-full h-[300px]'
        >
          <BarChart 
            data={annualCashflow}  
          >
            <CartesianGrid vertical={false} />
            <YAxis
              tickFormatter={
                (value) => {
                  return `£${numeral(value).format('0,0')}`
                }
              }
            />
            <XAxis
              dataKey='month'
              tickFormatter={
                (value) => {
                  return format(
                    new Date(
                      year,
                      value - 1,
                      1
                    ),
                    'MMM'
                  )
                }
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <div className='flex justify-between gap-2 w-full'>
                      <span className='capitalize text-muted-foreground'>{name}</span>
                      <span className='capitalize font-mono font-medium tabular-nums text-foreground'>
                        £{numeral(value).format('0,0')}
                      </span>
                    </div>
                  )}
                  labelFormatter={
                    (_, payload) => {
                      return (
                        <div>
                          {format(
                            new Date(
                              year,
                              payload[0]?.payload?.month - 1,
                              1
                            ),
                            'MMMM'
                          )}
                        </div>                        
                      )
                    }
                  } 
                />
              }
            />
            <Legend
              align='right'
              verticalAlign='top'
              wrapperStyle={{ textTransform: 'capitalize' }}
            />
            <Bar
              dataKey='income'
              fill='var(--color-income)'
              radius={4}
            />
            <Bar
              dataKey='expenses'
              fill='var(--color-expenses)'
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}