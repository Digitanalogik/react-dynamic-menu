import { useTranslation } from "react-i18next";
import { MenuItem } from "../utils/Definitions";

export const useTranslatedMenuItems = (menuItems: MenuItem[]): MenuItem[] => {
  const { t } = useTranslation();

  const translateMenuItems = (items: MenuItem[]): MenuItem[] => {
    return items.map((item) => ({
      ...item,
      label: t(item.label), // Translate the label
      tooltip: item.tooltip ? t(item.tooltip) : undefined, // Translate the tooltip if present
      children: item.children ? translateMenuItems(item.children) : undefined, // Recursively translate children
    }));
  };

  return translateMenuItems(menuItems);
};
