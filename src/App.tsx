import React from "react";
import * as Icons from "@mui/icons-material"; // Material UI Icons
import DynamicMenu from "./components/DynamicMenu";
import { MenuItem } from "./utils/Definitions";
import "./App.css";

const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      tooltip: "Go to Home",
      icon: Icons.Home,
      action: () => console.log("Home clicked"),
    },
    {
      label: "Settings",
      tooltip: "Open Settings",
      icon: Icons.Settings,
      action: () => console.log("Settings clicked"),
    },
    {
      label: "Logout",
      tooltip: "Log out of the app",
      icon: Icons.ExitToApp,
      action: () => console.log("Logout clicked"),
    },
  ];

  return (
    <div id="app">
      <h1>DynaMenu - Dynamic Menu</h1>
      <DynamicMenu menuItems={menuItems} />
    </div>
  );
};

export default App;
