import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teamInfo')({
  component: TeamInfo,
})

function TeamInfo() {
  const { teamId } = Route.useParams();
  return <div>Hello "{teamId}"!</div>
}
