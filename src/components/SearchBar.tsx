
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Props{
    searchValue : string
    setSearchValue : (value : string) => void
}


const SearchBar = ({ searchValue, setSearchValue }: Props) => {
    const [search, setSearch] = useState('');
  return (
    <Box p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.300" />
        </InputLeftElement>
        <Input
          onChange={(event) => {
            setSearchValue(event.target.value);
            setSearch(event.target.value);
                  }}
            borderRadius={10}
          placeholder="Search..."
          variant="outline"
          focusBorderColor="teal.500"
          value={search}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
