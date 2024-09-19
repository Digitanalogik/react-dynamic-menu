import { SvgIconComponent } from "@mui/icons-material";
import * as Icons from "@mui/icons-material"; // Material UI Icons

export interface MenuItem {
  label: string; // The label of the menu item
  tooltip?: string; // Optional tooltip shown on hover
  icon?: string | SvgIconComponent; // Can be a path to an SVG or a Material UI icon
  disabled?: boolean; // Optional flag to disable the menu item
  action?: () => void; // Optional action to be executed on click
  children?: MenuItem[]; // Nested menu items (submenus)
}

export const menuItems: MenuItem[] = [
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
    children: [
      {
        label: "Profile",
        tooltip: "Edit Profile",
        icon: Icons.Person,
        action: () => console.log("Profile clicked"),
      },
      {
        label: "Preferences",
        tooltip: "Set Preferences",
        icon: Icons.Tune,
        action: () => console.log("Preferences clicked"),
      },
    ],
  },
  {
    label: "Logout",
    tooltip: "Log out",
    icon: Icons.ExitToApp,
    action: () => console.log("Logout clicked"),
  },
];
