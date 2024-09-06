
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background : string
}

export const useGenres = () => { return { data: genres.results, error: null, isLoading: false } };
    
