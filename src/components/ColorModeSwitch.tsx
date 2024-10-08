import { useColorMode, HStack, Switch, Text } from "@chakra-ui/react";


function ColorModeSwitch(){
    const { colorMode, toggleColorMode } = useColorMode();
    
    return(
    <HStack>
        <Switch colorScheme="green" isChecked = {colorMode === "dark"} onChange={toggleColorMode}> </Switch>
        <Text>Dark Mode</Text>
    </HStack>)

}

export default ColorModeSwitch;