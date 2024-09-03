
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";




function GameGrid() {
   
    const { data, error, isLoading } = useGames();
    let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    return (
      <>
        {(error && <p>{error}</p>) || (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={10}
            padding={7}
          >
                {    (isLoading &&
                        skeleton.map((s => <GameCardContainer>
                            <SkeletonCard />
                        </GameCardContainer>
                        ))
            ) ||
            data.map((game) => (
              <GameCardContainer>
                  <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        )}
      </>
    );

}

export default GameGrid;