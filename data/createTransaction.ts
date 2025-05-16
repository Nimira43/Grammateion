import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const transactionSchema = z.object({
  categoryId: z.coerce
    .number()
    .positive('Please select a category.'),
  transactionDate: z
    .date()
    .max(addDays(new Date(), 1), 'Transaction date cannot be a future date.'),
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
}).validator(() => {

})