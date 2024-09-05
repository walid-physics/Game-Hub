import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarUp, BsChevronDown } from 'react-icons/bs';
import { usePlatforms } from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';
import { useState } from 'react';


interface Props{
  selectPlatform: (platform: Platform | undefined) => void
  
}


export const PlatformSelector = ({ selectPlatform } : Props) => {

  const { data } = usePlatforms();
  const [selectedPlatformName, setSelectedPlatformName] = useState<string>("");
  //let selectedPlatformName: string | undefined = undefined;
    return (
      <>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatformName ? selectedPlatformName : 'Platforms'}
          </MenuButton>
          <MenuList>
            {data.map((res) => (
              <MenuItem key={res.id} onClick={() => { selectPlatform(res);  setSelectedPlatformName(res.name) }}> {res.name }</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </>
    );
}
