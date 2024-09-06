
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

interface Props{
    searchValue : string
    setSearchValue : (value : string) => void
}


const SearchBar = ({ searchValue, setSearchValue }: Props) => {
    const [search, setSearch] = useState('');
    const ref = useRef<HTMLInputElement>(null);
  return (
      <form
          onSubmit={(event) =>
          {
              event.preventDefault();
              if (ref.current) setSearchValue(ref.current.value);
          }
      }
      >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          
          borderRadius={10}
          placeholder="Search..."
          variant="outline"
          focusBorderColor="teal.500"
          //value={ref.current?.value}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
