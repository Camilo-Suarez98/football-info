import { useContext } from 'react';
import './App.css';
import { FetchContext } from './Context/FetchContext';

function App() {
  const { country, setCountry, data } = useContext(FetchContext);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
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
