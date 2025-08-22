import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./context/SideBarContext.tsx";
import { ThemeProvider } from "./utils/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SidebarProvider>
  </StrictMode>
);
