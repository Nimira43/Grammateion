import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Grammateion</h1>
    <hr />
    <p>Expense Management Tracking System</p>
    <Button>Login</Button>
    <Button variant='outline'>Register</Button>
  </div>
}
