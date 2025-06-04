import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const today = new Date()
const searchSchema = z.object({
  month: z.number().min(1).max(12).optional(),
  year: z.number().min(today.getFullYear() - 100).max(today.getFullYear()).optional()
})

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/_layout/',
)({
  component: RouteComponent,
  validateSearch:
})

function RouteComponent() {
  return <div>Hello '/_authed/dashboard/transactions/'!</div>
}
