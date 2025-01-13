import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms";

function PlatformSelector() {
  const { data: platforms } = usePlatforms();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
          >
            Platforms
          </MenuButton>
          <MenuList>
            {platforms?.results.map((platform) => (
              <MenuItem>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default PlatformSelector;
