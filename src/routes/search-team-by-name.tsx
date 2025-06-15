import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { getTeamsByName } from '../queries/getTeamsByName';

export const Route = createFileRoute('/search-team-by-name')({
  component: RouteComponent,
})

type TeamsInfoProps = {
  team: {
    id: string,
    name: string,
    logo: string
  }
}

function RouteComponent() {
  const [teamName, setTeamName] = useState<string>("");
  const [data, setData] = useState<TeamsInfoProps[]>([]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = teamName.trim();
    if (!value) return;

    try {
      const teams = await getTeamsByName(value);
      setData(teams);
    } catch (error) {
      throw new Error(`The next error just happend: ${error}`);
    }
    setTeamName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='text-center'>
        <label htmlFor="country">
          Type a country name:
          <input
            id='country'
            type='text'
            className='ml-4 p-2 border-2 border-[#646cff] rounded-md'
            value={teamName}
            onChange={handleInputValue}
            required
          />
        </label>
      </form>
      <div>
        {data.slice(0, 20).map((info) => (
          <Link
            to='/team-detail/$teamName'
            params={{ teamName: info.team.name.toLocaleLowerCase() }}
            key={info.team.id}
            className='flex flex-col justify-center items-center'
          >
            <h3>{info.team.name}</h3>
            <img src={info.team.logo} alt="Team logo" />
          </Link>
        ))}
      </div>
    </div>
  );
};
