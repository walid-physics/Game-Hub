import { GameQuery } from "../components/GameGrid";
import { useData } from "./useData";
import { Platform } from "./usePlatforms";


    export interface Game {
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[];
      metacritic: number;
    }

   

const useGames = (
  gameQuery : GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: gameQuery.selectedGenre?.id, parent_platforms: gameQuery.platform?.id },
    },
    [gameQuery]
  );

export default useGames;