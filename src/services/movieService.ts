import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const { data } = await instance.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return data;
};
