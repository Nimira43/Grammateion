import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'

export const getAnnualCashflow = createServerFn({
  method: 'GET'
}).middleware([authMiddleware]).validator