import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";



function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | undefined>(undefined);
  


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
          <GenresList selectedGenre={ selectedGenre} setGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector  selectPlatform={(id) => setSelectedPlatform(id)}/>
        <GameGrid platformId={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App
