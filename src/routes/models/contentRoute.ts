import { ReactNode } from "react";

/**
 * Interface for the content route
 */
interface ContentRoute {
    /**
     * Id of the route
     */
    id: string;
    /**
     * Path of the route
     */
    path: string;
    /**
     * Name of the route
     */
    component: ReactNode;
    /**
     * Label of the route in the drawer
     */
    drawerLabel: string;
    /**
     * Icon of the route in the drawer
     */
    drawerIcon: ReactNode;
}

export default ContentRoute;