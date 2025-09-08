import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const schema = z.object({
  transactionId: z.number()})

export const deleteTransaction = createServerFn({
  method: 'POST'
}).middleware([authMiddleware]).validator()