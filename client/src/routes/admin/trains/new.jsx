import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/trains/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/trains/$trainId/new"!</div>
}
