import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenresList } from "./components/GenresList";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={
        {
          base: '1fr',
          lg : '200px 1fr'
        }
      }
    >
      <GridItem area="nav" bg="#55DDDD">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={2} area="aside" >
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App
