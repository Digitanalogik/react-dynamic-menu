// DynamicMenu.tsx
import React from "react";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem as MUIMenuItem,
} from "@mui/material";
import * as Icons from "@mui/icons-material"; // Import all MUI icons
import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  label: string; // The label of the menu item
  tooltip?: string; // Optional tooltip shown on hover
  icon?: string | SvgIconComponent; // Can be a path to an SVG or a Material UI icon
  action?: () => void; // Optional action to be executed on click
  disabled?: boolean; // Optional flag to disable the menu item
}

interface DynamicMenuProps {
  menuItems: MenuItem[];
}

const DynamicMenu: React.FC<DynamicMenuProps> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderIcon = (icon?: string | React.ElementType) => {
    if (typeof icon === "string") {
      // Render an SVG icon from a given path
      return <img src={icon} alt="menu-icon" width={24} height={24} />;
    } else if (icon) {
      // Render a Material UI icon component
      const IconComponent = icon as React.ElementType;
      return <IconComponent />;
    }
    return null;
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        {/* Button to trigger the menu */}
        <Icons.Menu />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <Tooltip key={index} title={item.tooltip || ""}>
            <MUIMenuItem
              onClick={() => {
                item.action && item.action();
                handleClose();
              }}
              disabled={item.disabled}
            >
              {renderIcon(item.icon)}
              {item.label}
            </MUIMenuItem>
          </Tooltip>
        ))}
      </Menu>
    </>
  );
};

export default DynamicMenu;
