import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.png"

function NavBar() {
    return <HStack>
        <Image borderRadius="10px" boxSize="60px" src={logo}></Image>
    </HStack>;
}

export default NavBar;