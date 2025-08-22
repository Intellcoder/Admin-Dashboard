import type { ReactElement } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export type ThemeMode = "light" | "dark";

export interface sideBarItemProps {
  title: string;
  to: string;
  icon: ReactElement;
}
