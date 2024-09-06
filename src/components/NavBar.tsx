import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.png"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";


interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function NavBar({ searchValue, setSearchValue }: Props) {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image borderRadius="10px" boxSize="60px" src={logo}></Image>
      <Box width="70%">
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;