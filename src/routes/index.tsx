import { createFileRoute } from '@tanstack/react-router'
import { useContext } from 'react'
import { FetchContext } from '../Context/FetchContext'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { country, setCountry, data } = useContext(FetchContext);
  console.log(data);

  return <div>
    {data.slice(0, 20).map(info => (
      <div key={info.team.id}>
        <h3>{info.team.name}</h3>
        <img src={info.team.logo} alt="Team logo" />
      </div>
    ))}
  </div>
}