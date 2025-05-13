import React, { createContext, useEffect, useState } from "react";

type FetchContextProps = {
  data: never[],
  country: string,
  setCountry: React.Dispatch<React.SetStateAction<string>>
};

type RequestOptionsProps = {
  method: string,
  headers: Headers,
  redirect: string
};

export const FetchContext = createContext<FetchContextProps | null>(null);

export const FecthProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (!country) return;

    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", import.meta.env.VITE_API_FOOTBALL_KEY);
    myHeaders.append("x-rapidapi-host", import.meta.env.VITE_FOOTBALL_URL);

    const requestOptions: RequestOptionsProps = {
      method: "GET",
      headers: myHeaders,
      redirect: 'follow'
    };

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://v3.football.api-sports.io/teams?country=${country}`,
          requestOptions
        );
        const json = await res.json();
        setData(json.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [country]);

  return (
    <FetchContext.Provider value={{ country, setCountry, data }} >
      {children}
    </FetchContext.Provider>
  );
};
