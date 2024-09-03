import { useData } from "./useData";

    export interface Platform {
      slug: string;
      name: string;
      id: string;
    }
    export interface Game {
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[];
      metacritic: number;
    }

   

const useGames = () => useData<Game>('/games');

export default useGames;