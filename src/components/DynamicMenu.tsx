// DynamicMenu.tsx
import React from "react";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem as MUIMenuItem,
} from "@mui/material";
import * as Icons from "@mui/icons-material"; // Import all MUI icons
import { MenuItem } from "../utils/Definitions";

interface DynamicMenuProps {
  menuItems: MenuItem[];
}

const DynamicMenu: React.FC<DynamicMenuProps> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = React.useState<{
    [key: string]: HTMLElement | null;
  }>({});

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuClick = (
    event: React.MouseEvent<HTMLLIElement>,
    label: string
  ) => {
    setSubmenuAnchorEl((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleSubmenuClose = (label: string) => {
    setSubmenuAnchorEl((prev) => ({ ...prev, [label]: null }));
  };

  const renderIcon = (icon?: string | React.ElementType) => {
    if (typeof icon === "string") {
      return <img src={icon} alt="menu-icon" width={24} height={24} />;
    } else if (icon) {
      const IconComponent = icon as React.ElementType;
      return <IconComponent />;
    }
    return null;
  };

  const renderMenuItems = (items: MenuItem[], level: number = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <Tooltip title={item.tooltip || ""}>
          <MUIMenuItem
            onClick={(e) => {
              if (item.children) {
                handleSubmenuClick(e, item.label);
              } else {
                item.action && item.action();
                handleClose();
              }
            }}
            disabled={item.disabled}
          >
            {renderIcon(item.icon)}
            {item.label}
            {item.children && <Icons.ArrowRight fontSize="small" />}{" "}
            {/* Icon for submenu */}
          </MUIMenuItem>
        </Tooltip>

        {item.children && (
          <Menu
            anchorEl={submenuAnchorEl[item.label] || null}
            open={Boolean(submenuAnchorEl[item.label])}
            onClose={() => handleSubmenuClose(item.label)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {renderMenuItems(item.children, level + 1)}{" "}
            {/* Recursively render submenus */}
          </Menu>
        )}
      </div>
    ));
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Icons.Menu />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {renderMenuItems(menuItems)}
      </Menu>
    </>
  );
};

export default DynamicMenu;
