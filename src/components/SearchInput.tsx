import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

type TProps = {
  onSearch: (searchText: string) => void;
};

function SearchInput({ onSearch }: TProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <Box order={{ base: 3, sm: 2 }} width={"100%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchRef.current) {
            onSearch(searchRef.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300">
            <FaSearch />
          </InputLeftElement>
          <Input
            ref={searchRef}
            placeholder="Search Games..."
            borderRadius="20px"
            backgroundColor="gray.700"
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
