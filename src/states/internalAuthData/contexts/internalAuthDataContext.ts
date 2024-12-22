import { Context, createContext } from "react";

/**
 * Props interface for InternalAuthDataContext.
 */
export interface InternalAuthDataContextProps {
    /**
     * Indicates if the authentication is loading.
     */
    isAuthenticationLoading: boolean;
    /**
     * Navigates to the provided route if the user is authenticated.
     */
    navigateToRouteOnAuthentication: (route: string) => void;
    /**
     * Navigates to the provided route if the user is not authenticated.
     */
    navigateToRouterIfNotAuthenticated: (route: string) => void;
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
