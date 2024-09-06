
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";



interface Props {
  gameQuery : GameQuery
}


function GameGrid({gameQuery }: Props) {
   
    const { data, error, isLoading } = useGames(gameQuery);
    let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    const filteredGames = data;
    
    if (error) return <Text fontSize={30} marginLeft={8} marginTop={7}>{error}</Text>
  
    if (filteredGames.length === 0 && !isLoading)
        return <h4>No games found</h4>
    
    return (
   
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={7}
            padding={7}
          >
            {(isLoading &&
              skeleton.map(( index) => (
                <GameCardContainer key={index}>
                  <SkeletonCard />
                </GameCardContainer>
              ))) ||
            
              filteredGames.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))
            
                }
          </SimpleGrid>
  )
}
      
    



export default GameGrid;