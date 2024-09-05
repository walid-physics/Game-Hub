import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid, { GameQuery } from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";



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
      <GridItem area="nav" bg="#55DDDD">
        <NavBar></NavBar>
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
        <PlatformSelector
          selectedPlatform={gameQuery?.platform}
          selectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform: platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App
