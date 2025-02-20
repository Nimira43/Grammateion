import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

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
            control={form.control} name='transactionType'
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
        </fieldset>
      </form>  
    </Form>
  )
}