import { FilterProps } from "@/types";

export async function fetchExercises(filters: FilterProps) {
  let { muscle, difficulty } = filters;
  const headers: HeadersInit = {
    "x-rapidapi-key": "c580c57405mshb098e415735456dp1eb45bjsnd7c8ea6e4194",
    "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
