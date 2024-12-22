import { Context, createContext } from "react";

/**
 * Props interface for InternalAuthDataContext.
 */
export interface InternalAuthDataContextProps {
    /**
     * Indicates if there was an error retrieving the ID token.
     */
    isIdTokenRetrievalError: boolean;
    /**
     * Indicates if the authentication is loading.
     */
    isAuthenticationLoading: boolean;
    /**
     * Navigates to the provided route if the user is authenticated.
     */
    navigateToRouteOnAuthentication: (route: string) => void;
    /**
     * User email.
     */
    userEmail: string;
    /**
     * User name.
     */
    userName: string;
}

/**
 * Context object for managing internal auth data.
 */
const InternalAuthDataContext: Context<null | InternalAuthDataContextProps> = createContext<
    null | InternalAuthDataContextProps
>(
    null
);

/**
 * Display name for the InternalAuthDataContext.
 */
InternalAuthDataContext.displayName = "InternalAuthDataContext";

export default InternalAuthDataContext;
