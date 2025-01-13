import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack order={{ base: 2, sm: 3 }}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
