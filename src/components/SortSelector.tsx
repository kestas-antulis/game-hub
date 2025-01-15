import useGameQueryStore from "@/store";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function SortSelector() {
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

  const setSelectedSortOrder = useGameQueryStore((store) => store.setSortOrder);
  const selectedSortOrder = useGameQueryStore(
    (store) => store.gameQuery.sortOrder
  );
  const currentSortOrder = sortOrder.find(
    (item) => item.value === selectedSortOrder
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
                onClick={() => setSelectedSortOrder(order.value)}
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
