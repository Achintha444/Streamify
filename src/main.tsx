import { AuthProvider } from "@asgardeo/auth-react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { authConfig } from './auth/authConfig.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider config={ authConfig }>
      <App />
    </AuthProvider>
  </StrictMode>,
)
