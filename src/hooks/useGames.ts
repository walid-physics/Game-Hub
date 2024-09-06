import { GameQuery } from "../App";
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
      params: { genres: gameQuery.selectedGenre?.id, parent_platforms: gameQuery.platform?.id, ordering : gameQuery.sortType?.value, search : gameQuery?.searchValue},
    },
    [gameQuery]
  );

export default useGames;