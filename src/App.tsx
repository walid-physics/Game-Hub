import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { OrderBy, OrderType } from "./components/OrderBy";
import { Platform } from "./hooks/usePlatforms";
import { Genre } from "./hooks/useGenres";
import GameGrid from "./components/GameGrid";


export interface GameQuery {
  selectedGenre: Genre | null;
  platform?: Platform;
  sortType: OrderType;
  searchValue: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" bg="#222222">
        <NavBar searchValue={gameQuery.searchValue} setSearchValue={(searchValue) => setGameQuery({...gameQuery, searchValue : searchValue})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingY={3} paddingX={2} area="aside">
          <GenresList
            selectedGenre={gameQuery?.selectedGenre}
            setGenre={(genre) =>
              setGameQuery({ ...gameQuery, selectedGenre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={3} paddingLeft={7} paddingTop={3}>
        <PlatformSelector
          selectedPlatform={gameQuery?.platform}
          selectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform: platform })
          }
        />
          <OrderBy orderType={gameQuery.sortType} orderBy={(orderType) => setGameQuery({...gameQuery, sortType : orderType})}/>
          </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App
