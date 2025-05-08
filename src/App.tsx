import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", import.meta.env.VITE_API_FOOTBALL_KEY);
    myHeaders.append("x-rapidapi-host", import.meta.env.VITE_FOOTBALL_URL);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: 'follow'
    }

    const fetchData = async () => {
      const urlData = await fetch("https://v3.football.api-sports.io/teams?country=spain", requestOptions);
      const res = await urlData.json();
      setData(res);
    }

    fetchData();
  }, [setData]);

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
