import { AuthProvider } from "@asgardeo/auth-react";
import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { authConfig } from "./auth/authConfig.ts";
import "./styles/index.css";
import { appTheme } from "./theme/appTheme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider config={ authConfig }>
            <ThemeProvider theme={ appTheme }>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
);
