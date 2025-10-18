import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const schema = z.object({
  year: z.number()
})

export const getAnnualCashflow = createServerFn({
  method: 'GET'
}).middleware([authMiddleware]).validator