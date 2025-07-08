import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const today = new Date()

const schema = z.object({
  month: z
    .number()
    .min(1)
    .max(12),
  years: z
    .number()
    .min(today.getFullYear() - 100)
    .max(today.getFullYear())
})

export const getTransactionsByMonth = createServerFn({
  method: 'GET'
}).middleware([authMiddleware]).validator((data: z.infer<typeof schema>) => {
  schema.parse(data)
})