import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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
              {yearsRange.map(year => 
                <SelectItem
                
                >
                  
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}