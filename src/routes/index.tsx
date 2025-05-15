import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getTeamsByCountry } from '../quieries/getTeamsByCountry';

type TeamInfoProps = {
  team: {
    id: number,
    name: string,
    logo: string
  }
}

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [input, setInput] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [data, setData] = useState<TeamInfoProps[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCountry(input.trim());
    }, 1000);

    return () => clearTimeout(timeout);
  }, [input]);

  useEffect(() => {
    getTeamsByCountry(country)
      .then(setData)
  }, [country]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <label htmlFor="country">
        Type a Country name:
        <input
          id="country"
          type="text"
          value={input}
          onChange={handleInputValue}
          required
        />
      </label>
      {data.slice(0, 20).map((info) => (
        <div key={info.team.id}>
          <h3>{info.team.name}</h3>
          <img src={info.team.logo} alt="Team logo" />
        </div>
      ))}
    </div>
  )
}