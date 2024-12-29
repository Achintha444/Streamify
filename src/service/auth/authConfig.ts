import { AuthReactConfig } from "@asgardeo/auth-react";

export const authConfig: AuthReactConfig = {
    baseUrl: import.meta.env.VITE_BASE_URL,
    clientID: import.meta.env.VITE_CLIENT_ID,
    scope: (import.meta.env.VITE_SCOPE as string).split(" "),
    signInRedirectURL: import.meta.env.VITE_SIGNIN_REDIRECT_URL,
    signOutRedirectURL: import.meta.env.VITE_SIGNOUT_REDIRECT_URL
};
