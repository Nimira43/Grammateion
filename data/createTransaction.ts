import { createServerFn } from '@tanstack/start'

export const createTransaction = createServerFn({
  method: 'POST'
})