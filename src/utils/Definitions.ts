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
    label: "menu.backgrounds",
    tooltip: "tooltips.backgrounds",
    icon: Icons.Landscape,
    action: () => console.log("Backgrounds clicked"),
  },
  {
    label: "menu.maps",
    tooltip: "tooltips.maps",
    icon: Icons.Map,
    action: () => console.log("Maps clicked"),
  },
  {
    label: "menu.filter",
    tooltip: "tooltips.filter",
    icon: Icons.FilterAlt,
    action: () => console.log("Filter clicked"),
  },
  {
    label: "menu.draw",
    tooltip: "tooltips.draw",
    icon: Icons.Brush,
    children: [
      {
        label: "menu.line",
        tooltip: "tooltips.line",
        icon: Icons.ShowChart,
        action: () => console.log("Line clicked"),
      },
      {
        label: "menu.rectangle",
        tooltip: "tooltips.rectangle",
        icon: Icons.CropSquare,
        action: () => console.log("Rectangle clicked"),
      },
      {
        label: "menu.subtract",
        tooltip: "tooltips.subtract",
        icon: Icons.RemoveCircleOutline,
        action: () => console.log("Subtract clicked"),
      },
    ],
  },
  {
    label: "menu.download",
    tooltip: "tooltips.download",
    icon: Icons.Download,
    action: () => console.log("Download clicked"),
  },
  {
    label: "menu.settings",
    tooltip: "tooltips.settings",
    icon: Icons.Settings,
    children: [
      {
        label: "menu.profile",
        tooltip: "tooltips.profile",
        icon: Icons.Person,
        action: () => console.log("Profile clicked"),
      },
      {
        label: "menu.preferences",
        tooltip: "tooltips.preferences",
        icon: Icons.Tune,
        action: () => console.log("Preferences clicked"),
      },
    ],
  },
  {
    label: "menu.save",
    tooltip: "tooltips.save",
    icon: Icons.Save,
    action: () => console.log("Save clicked"),
  },
  {
    label: "menu.logout",
    tooltip: "tooltips.logout",
    icon: Icons.ExitToApp,
    action: () => console.log("Logout clicked"),
  },
];
