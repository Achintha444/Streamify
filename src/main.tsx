import { AuthProvider } from "@asgardeo/auth-react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { authConfig } from './auth/authConfig.ts';
import { appTheme } from './theme/appTheme.ts';
import './index.css';
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider config={ authConfig }>
        <ThemeProvider theme={ appTheme }>
          <App />
        </ThemeProvider>
      </AuthProvider>
  </StrictMode>
)
