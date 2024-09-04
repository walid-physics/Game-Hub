import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarUp, BsChevronDown } from 'react-icons/bs';
import { usePlatforms } from '../hooks/usePlatforms';


interface Props{
    selectPlatform : (platformId : number) => void
}


export const PlatformSelector = ({ selectPlatform } : Props) => {

    const { data } = usePlatforms();

    return (
      <>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((res) => (
              <MenuItem key={res.id} onClick={() => selectPlatform(res.id)}> {res.name }</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </>
    );
}
