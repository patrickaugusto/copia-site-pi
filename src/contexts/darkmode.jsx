// Toggle.jsx
import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button size="sm" onClick={toggleColorMode}>
        {colorMode === "light" ? "Modo Escuro" : "Modo Claro"}
      </Button>
    </div>
  );
};

export default Toggle;
