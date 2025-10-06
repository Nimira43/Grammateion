import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='max-w-screen-xl mx-auto py-5'>
    <h1 className='text-4xl foont-medium pb-5'>Dashboard</h1>
  </div>
}
