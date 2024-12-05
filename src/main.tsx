import { AuthProvider } from "@asgardeo/auth-react";
import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { authConfig } from "./auth/authConfig.ts";
import { getRouter } from "./routes/routes.tsx";
import "./styles/index.css";
import { appTheme } from "./theme/appTheme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider config={ authConfig }>
            <ThemeProvider theme={ appTheme }>
                <RouterProvider router={ getRouter } />
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
);
