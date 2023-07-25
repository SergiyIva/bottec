import React from "react";
import { Header } from "./components/Header";
import { HeaderPageState } from "./components/Header/Header.types";

function App() {
  return <Header selectedPage={HeaderPageState.None} />;
}

export default App;
