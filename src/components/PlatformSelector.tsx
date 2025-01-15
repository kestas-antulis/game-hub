import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

function PlatformSelector() {
  const { data: platforms, error } = usePlatforms();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const setSelectedPlatformid = useGameQueryStore(
    (store) => store.setPlatformid
  );
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            onMouseOver={onOpen}
            onMouseOutCapture={onClose}
            rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
          >
            {selectedPlatform?.name || "Platform"}
          </MenuButton>
          <MenuList onMouseOver={onOpen} onMouseOutCapture={onClose}>
            {platforms?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => setSelectedPlatformid(platform.id)}
                justifyContent="space-between"
              >
                {platform.name}
                {platform.platforms.length > 1 &&
                  ` (${platform.platforms.length})`}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default PlatformSelector;
