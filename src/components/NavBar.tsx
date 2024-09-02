import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.png"
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
    return (
      <HStack padding='10px' justifyContent="space-between">
        <Image borderRadius="10px" boxSize="60px" src={logo}></Image>
        <ColorModeSwitch />
      </HStack>
    );
}

export default NavBar;