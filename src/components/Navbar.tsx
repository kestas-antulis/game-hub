import { Flex, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

function Navbar() {

  return (
    <Flex marginY={1} alignItems="center" flexWrap={{base:"wrap", sm:"nowrap"}} justifyContent="space-between" gap={{base:"10px", sm:"0"}} marginBottom={{base:"20px", sm:"0"}} 
    padding={{
      base: "10px",
      sm: "20px",
      md: "20px",
      lg: "20px",
      "2xl": "0",
    }}>
      <Image src={logo} boxSize="60px;" order={1}/>
      <SearchInput />
      <ColorModeSwitch/>
    </Flex>
  );
}

export default Navbar;
