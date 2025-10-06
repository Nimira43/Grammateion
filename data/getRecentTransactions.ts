import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'

export const getRecentTransactions = createServerFn({
  method: 'GET'
}).middleware([authMiddleware])