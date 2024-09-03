
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre : Genre | null;
}


function GameGrid({selectedGenre }: Props) {
   
    const { data, error, isLoading } = useGames(selectedGenre);
    let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    return (
      <>
        {(error && <p>{error}</p>) || (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={5}
            padding={7}
          >
                {    (isLoading &&
                        skeleton.map(((s, index) => <GameCardContainer key={index}>
                            <SkeletonCard />
                        </GameCardContainer>
                        ))
            ) ||
            data.map((game) => (
              <GameCardContainer key={game.id}>
                  <GameCard game={game} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        )}
      </>
    );

}

export default GameGrid;