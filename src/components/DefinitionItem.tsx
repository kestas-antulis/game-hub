import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type TProps = {
  term: string;
  children: ReactNode | ReactNode[];
};

function DefinitionItem({ term, children }: TProps) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
