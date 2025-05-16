import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getTeamById } from '../../queries/getTeamById';

export const Route = createFileRoute('/team-detail/$teamName')({
  component: RouteComponent,
})

function RouteComponent() {
  const { teamName } = Route.useParams();
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    getTeamById(teamName)
      .then(setTeamInfo)
  }, [teamName]);

  return <div>Hello "/team-detail/$teamName"!</div>
}
