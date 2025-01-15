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
import usePlatform from "@/hooks/usePlatform";

type TProps = {
  onActivePlatform: (activePlatform: TParentPlatform) => void;
  activePlatformId?: number;
};

function PlatformSelector({ onActivePlatform, activePlatformId }: TProps) {
  const { data: platforms, error } = usePlatforms();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const activePlatform = usePlatform(activePlatformId);

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
