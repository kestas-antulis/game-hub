import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type TProps = {
  onSelectSortOrder: (order: string) => void;
  sortSelector: string;
};

function SortSelector({ onSelectSortOrder, sortSelector }: TProps) {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Date Created" },
    { value: "-updated", label: "Date Updated" },
  ];

  const currentSortOrder = sortOrder.find(
    (item) => item.value === sortSelector
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
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
            Order By: {currentSortOrder?.label}
          </MenuButton>
          <MenuList onMouseOver={onOpen} onMouseOutCapture={onClose}>
            {sortOrder.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
                justifyContent="space-between"
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default SortSelector;
