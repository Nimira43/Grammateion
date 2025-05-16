import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { addDays } from 'date-fns'
import { z } from 'zod'

const transactionSchema = z.object({
  categoryId: z.coerce
    .number()
    .positive('Please select a category.'),
  transactionDate: z.string().refine((value) => {
    const parsedDate = new Date(value)
    return !isNaN(parsedDate.getTime()) && parsedDate <= addDays(new Date(), 1)
  }),
  amount: z.coerce
    .number()
    .positive('Amount must be a positive number.'),
  description: z
    .string()
    .min(5, 'Description must contain at least 5 characters.')
    .max(300, 'Description must not exceed 300 characters.')
})

export const createTransaction = createServerFn({
  method: 'POST'
})
  .middleware([authMiddleware])
  .validator((data: z.infer<typeof transactionSchema>) =>
    transactionSchema.parse(data)
  )
  .handler(async ({ data }) => {
    
})