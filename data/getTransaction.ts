import { createServerFn } from '@tanstack/start'

export const getTransaction = createServerFn({
  method: 'GET',
})