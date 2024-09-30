import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider, AuthReactConfig } from "@asgardeo/auth-react";

const config: AuthReactConfig = {
     signInRedirectURL: import.meta.env.VITE_SIGNIN_REDIRECT_URL,
     signOutRedirectURL: import.meta.env.VITE_SIGNOUT_REDIRECT_URL,
     clientID: import.meta.env.VITE_CLIENT_ID,
     baseUrl: import.meta.env.VITE_BASE_URL,
     scope: (import.meta.env.VITE_SCOPE as string).split(" "),
};

console.log(config);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider config={ config }>
      <App />
    </AuthProvider>
  </StrictMode>,
)
