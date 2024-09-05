import { useData } from "./useData";
import { Genre } from "./useGenres";

    export interface Platform {
      slug: string;
      name: string;
      id: number;
    }
    export interface Game {
      id: number;
      name: string;
      background_image: string;
      parent_platforms: { platform: Platform }[];
      metacritic: number;
    }

   

const useGames = (
  selectedGenre: Genre | null,
  parentPlatformId?: Platform | undefined
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, parent_platforms: parentPlatformId?.id },
    },
    [selectedGenre?.id, parentPlatformId?.id]
  );

export default useGames;