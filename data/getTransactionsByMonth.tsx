import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'




export const getTransactionsByMonth = createServerFn({
  method: 'GET'
}).middleware([authMiddleware]).validator()