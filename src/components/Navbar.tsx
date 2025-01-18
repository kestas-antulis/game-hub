import { Box, Flex, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      marginY={1}
      alignItems="center"
      flexWrap={{ base: "wrap", sm: "nowrap" }}
      justifyContent="space-between"
      gap={{ base: 2, sm: 3 }}
      marginBottom={{ base: "20px", sm: "0" }}
      paddingX={{ base: 3, lg: 6 }}
      paddingY={{ base: 2 }}
    >
      <Box>
        <Link to="/">
          <Image
            src={logo}
            boxSize="60px"
            objectFit="cover"
            order={{ base: 1, sm: 2 }}
          />
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Navbar;
