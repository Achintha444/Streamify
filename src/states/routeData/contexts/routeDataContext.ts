import { Context, createContext } from "react";
import ContentRoute from "../../../routes/models/contentRoute";

/**
 * Props interface for RouteDataContext.
 */
export interface RouteDataContextProps {
    /**
     * The currently active route.
     */
    activeRoute: string;
    /**
     * The currently active content route object.
     */
    activeContentRoute: ContentRoute | undefined;
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
