import { Context, createContext } from "react";

/**
 * Props interface for RouteDataContext.
 */
export interface RouteDataContextProps {
    /**
     * The currently active route.
     */
    activeRoute: string;
    /**
     * Check if the given route is active.
     */
    checkIfActiveRoute: (route: string) => boolean;
}

/**
 * Context object for managing branding preference.
 */
const RouteDataContext: Context<null | RouteDataContextProps> = createContext<
    null | RouteDataContextProps
>(
    null
);

/**
 * Display name for the RouteDataContext.
 */
RouteDataContext.displayName = "RouteDataContext";

export default RouteDataContext;
