import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search-team-by-name')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/search-team-by-name"!</div>
}
