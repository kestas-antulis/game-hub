import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <InputGroup order={{ base: 3, sm: 2 }}>
      <InputLeftElement pointerEvents="none" color="gray.300">
        <FaSearch />
      </InputLeftElement>
      <Input
        placeholder="Search Games..."
        borderRadius="20px"
        variant="filled"
      />
    </InputGroup>
  );
}

export default SearchInput;
