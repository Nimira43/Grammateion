import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from './ui/calendar'

const transactionFormSchema = z.object({
  transactionType: z.enum(['income', 'expense']),
  categoryId: z.coerce.number().positive('Please select a category.'),
  transactionDate: z.date().max(new Date(), 'Transaction date cannot be a future date.'),
  amount: z.coerce.number().positive('Amount must be a positive number.'),
  description: z.string().min(5, 'Description must contain at least 5 characters.').max(300, 'Description must not exceed 300 characters.')
})

export function TransactionForm() {
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      transactionType: 'income',
      amount: 0,
      categoryId: 0,
      description: '',
      transactionDate: new Date(),
    }
  })

  return (
    <Form {...form}>
      <form>
        <fieldset className='grid grid-cols-2 gap-y-5 gap-x-2'>
          <FormField
            control={form.control}
            name='transactionType'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value} onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Transaction Type'/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='income'>Income</SelectItem>                   <SelectItem value='expense'>Expense</SelectItem>    
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='categoryId'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value.toString()} onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Category'/>
                      </SelectTrigger>
                      <SelectContent>
                        <h4>Select Items Placeholder</h4>   
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='transactionDate'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Transaction Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild> 
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[280px] justify-center text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className='mr-2 h-4 w-4' />
                          {field.value ? (
                            format(field.value, 'do MMMM yyyy', { locale: enGB })
                          ) : (
                            <span>Pick Date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </fieldset>
      </form>  
    </Form>
  )
}