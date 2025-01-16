import Navbar from "@/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box
        padding={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading>Ooops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry, page does not exist."
            : "Sorry, an unexpected Error has occured."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
