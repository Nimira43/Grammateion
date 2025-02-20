import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const transactionFormSchema = z.object({
  transactionType: z.enum(['income', 'expense']),
  categoryId: z.coerce.number().positive('Please select a category.'),
  transactionDate: z.date().max(new Date(), 'Transaction date cannot be a future date.'),
  amount: z.coerce.number().positive('Amount must be a positive number.'),
  description: z.string().min(5, 'Description must contain at least 5 characters.').max(300, 'Description must not exceed 300 characters.')
})

export function TransactionForm() {
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema)
  })

  return (
    <div>
      Transaction Form
    </div>
  )
}