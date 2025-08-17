import authMiddleware from '@/authMiddleware'
import { createServerFn } from '@tanstack/start'

export const getTransaction = createServerFn({
  method: 'GET',
}).middleware([authMiddleware]).validator()