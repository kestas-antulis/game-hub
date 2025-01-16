import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

type TProps = {
  children: string;
};

function ExpandableText({ children }: TProps) {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text marginBottom="20px">{summary}</Text>
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="gray"
        size="sm"
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
}

export default ExpandableText;
