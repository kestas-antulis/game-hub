import useGameQueryStore from "@/store";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <Box order={{ base: 3, sm: 2 }} width={"100%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (location.pathname !== "/") {
            navigate("/");
          }
          if (searchRef.current) {
            setSearchText(searchRef.current.value);
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
