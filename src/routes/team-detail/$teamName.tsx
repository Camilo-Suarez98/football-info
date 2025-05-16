import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getTeamById } from '../../queries/getTeamById';

type TeamInfoProps = {
  team: {
    id: number,
    name: string,
    country: string,
    logo: string
  },
  venue: {
    name: string,
    image: string,
    capacity: string,
    address: string,
    surface: string
  }
}

export const Route = createFileRoute('/team-detail/$teamName')({
  component: RouteComponent,
})

function RouteComponent() {
  const { teamName } = Route.useParams();
  const [teamInfo, setTeamInfo] = useState<TeamInfoProps[]>([]);

  useEffect(() => {
    getTeamById(teamName)
      .then(setTeamInfo)
  }, [teamName]);

  return (
    <div>
      {teamInfo.slice(0, 1).map(info => (
        <div key={info.team.id}>
          <h1 className='text-5xl'>
            {info.team.name} {" "}
            <span>({info.team.country})</span>
          </h1>
          <img src={info.team.logo} alt={`${info.team.name}'s Logo`} />
          <p>Stadium: {info.venue.name}</p>
          <img src={info.venue.image} alt={`${info.team.name}'s Stadium`} />
          <p>Capacity: <strong>{info.venue.capacity}</strong></p>
          <p>Address: {info.venue.address}</p>
          <p>Surface: {info.venue.surface}</p>
        </div>
      ))}
    </div>
  );
};
