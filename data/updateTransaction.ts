import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'

export const updateTransaction = createServerFn({
  method: 'POST'
})