import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'

export function Cashflow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between'>
          <span>Cashflow</span>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
          </Select>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}