import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import themefrom from './themes/theme.ts'
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={themefrom}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
    </ChakraProvider>
  </StrictMode>
);
