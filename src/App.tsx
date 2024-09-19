import React from "react";
import DynamicMenu from "./components/DynamicMenu";
import { menuItems } from "./utils/Definitions";
import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app">
      <h1>DynaMenu - Dynamic Menu</h1>
      <DynamicMenu menuItems={menuItems} />
    </div>
  );
};

export default App;
