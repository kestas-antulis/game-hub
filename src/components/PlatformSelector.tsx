import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import usePlatforms, { TParentPlatform } from "@/hooks/usePlatforms";

type TProps = {
  onActivePlatform: (activePlatform: TParentPlatform) => void;
  activePlatform: TParentPlatform | null;
};

function PlatformSelector({ onActivePlatform, activePlatform }: TProps) {
  const { data: platforms, error } = usePlatforms();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            {activePlatform?.name || "Platform"}
          </MenuButton>
          <MenuList onMouseOver={onOpen} onMouseOutCapture={onClose}>
            {platforms?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onActivePlatform(platform)}
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
