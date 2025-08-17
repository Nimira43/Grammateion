import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const schema = z.object({
  transactionId: z.number()
})

export const getTransaction = createServerFn({
  method: 'GET',
}).middleware([authMiddleware]).validator(schema)