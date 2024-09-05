import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarUp, BsChevronDown } from 'react-icons/bs';
import { Platform, usePlatforms } from '../hooks/usePlatforms';
import { useState } from 'react';


interface Props {
  selectPlatform: (platform: Platform | undefined) => void;
  selectedPlatform: Platform | undefined;
}


export const PlatformSelector = ({ selectPlatform, selectedPlatform } : Props) => {

  const { data } = usePlatforms();
  //let selectedPlatformName: string | undefined = undefined;
    return (
      <>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform ? selectedPlatform.name : 'Platforms'}
          </MenuButton>
          <MenuList>
            {data.map((res) => (
              <MenuItem key={res.id} onClick={() =>  selectPlatform(res) }> {res.name }</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </>
    );
}
