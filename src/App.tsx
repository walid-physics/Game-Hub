import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="#55FFFF">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="green">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow">
        main
      </GridItem>
    </Grid>
  );
}

export default App
