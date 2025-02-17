import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/dashboard/transactions/_layout')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return (
    <div>
      Breadcrumbs
      <Outlet />
    </div>
  )
}
