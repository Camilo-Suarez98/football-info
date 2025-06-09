import type { RequestOptionsProps } from "../types/RequestOptions";

export const getTeamById = async (teamName: string) => {
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", import.meta.env.VITE_API_FOOTBALL_KEY);
  myHeaders.append("x-rapidapi-host", import.meta.env.VITE_FOOTBALL_URL);

  const requestOptions: RequestOptionsProps = {
    method: "GET",
    headers: myHeaders,
    redirect: 'follow'
  };

  const res = await fetch(
    `https://v3.football.api-sports.io/teams?name=${teamName}`,
    requestOptions
  );

  const data = await res.json();

  return data.response;
};
