import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'

export const deleteTransaction = createServerFn({
  method: 'POST'
}).middleware([authMiddleware]).validator()