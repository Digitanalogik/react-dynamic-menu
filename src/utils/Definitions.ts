import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  label: string; // The label of the menu item
  tooltip?: string; // Optional tooltip shown on hover
  icon?: string | SvgIconComponent; // Can be a path to an SVG or a Material UI icon
  action?: () => void; // Optional action to be executed on click
  disabled?: boolean; // Optional flag to disable the menu item
}
