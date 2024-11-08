import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading>Hello World</Heading>
      <Button> Click</Button>
    </>
  );
}

export default App;
