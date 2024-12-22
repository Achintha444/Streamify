import { AuthProvider } from "@asgardeo/auth-react";
import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { authConfig } from "./auth/authConfig.ts";
import Layout from "./layouts/layout.tsx";
import { getRouter } from "./routes/routes.tsx";
import "./styles/index.css";
import { appTheme } from "./theme/appTheme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider config={ authConfig }>
            <ThemeProvider theme={ appTheme }>
                <Layout>
                    <RouterProvider router={ getRouter } />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
);
