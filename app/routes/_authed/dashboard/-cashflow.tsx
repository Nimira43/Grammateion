import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'

export function Cashflow({
  yearsRange
}: {
  yearsRange: Number[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between'>
          <span>Cashflow</span>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}