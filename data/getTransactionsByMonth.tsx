import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const schema = z.object({
  month: z.number(),
  years: z.number()
})


export const getTransactionsByMonth = createServerFn({
  method: 'GET'
}).middleware([authMiddleware]).validator()