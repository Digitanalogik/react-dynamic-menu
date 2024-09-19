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
    label: "Backgrounds",
    tooltip: "Choose background options",
    icon: Icons.Landscape, // Icon for backgrounds
    action: () => console.log("Backgrounds clicked"),
  },
  {
    label: "Maps",
    tooltip: "Open maps options",
    icon: Icons.Map, // Icon for maps
    action: () => console.log("Maps clicked"),
  },
  {
    label: "Filter",
    tooltip: "Apply filters",
    icon: Icons.FilterAlt, // Icon for filters
    action: () => console.log("Filter clicked"),
  },
  {
    label: "Draw",
    tooltip: "Drawing tools",
    icon: Icons.Brush, // Icon for draw
    children: [
      {
        label: "Line",
        tooltip: "Draw a line",
        icon: Icons.ShowChart, // Icon for line
        action: () => console.log("Line clicked"),
      },
      {
        label: "Rectangle",
        tooltip: "Draw a rectangle",
        icon: Icons.CropSquare, // Icon for rectangle
        action: () => console.log("Rectangle clicked"),
      },
      {
        label: "Subtract",
        tooltip: "Subtract area",
        icon: Icons.RemoveCircleOutline, // Icon for subtract
        action: () => console.log("Subtract clicked"),
      },
    ],
  },
  {
    label: "Download",
    tooltip: "Download your work",
    icon: Icons.Download, // Icon for download
    action: () => console.log("Download clicked"),
  },
  {
    label: "Settings",
    tooltip: "Adjust settings",
    icon: Icons.Settings, // Icon for settings
    action: () => console.log("Settings clicked"),
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
    label: "Save",
    tooltip: "Save your progress",
    icon: Icons.Save, // Icon for save
    action: () => console.log("Save clicked"),
  },
  {
    label: "Logout",
    tooltip: "Log out of your account",
    icon: Icons.ExitToApp, // Icon for logout
    action: () => console.log("Logout clicked"),
  },
];
