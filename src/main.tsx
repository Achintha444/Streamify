import { AuthProvider } from "@asgardeo/auth-react";
import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Layout from "./layouts/layout.tsx";
import { getRouter } from "./routes/routes.tsx";
import { authConfig } from "./service/auth/authConfig.ts";
import "./styles/index.css";
import { appTheme } from "./theme/appTheme.ts";
import "./theme/chartTheme.ts";

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
