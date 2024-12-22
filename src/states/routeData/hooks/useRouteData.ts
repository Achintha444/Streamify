import { useContext } from "react";
import RouteDataContext, { RouteDataContextProps } from "../contexts/routeDataContext";

/**
 * Interface for the return type of the `useRouteData` hook.
 */
export type UseRouteDataInterface = RouteDataContextProps;

/**
 * Hook that provides access to the information about the routes in the application.
 * @returns An object containing the route related information.
 */
const useRouteData = (): UseRouteDataInterface => {
    const context: RouteDataContextProps | null = useContext(RouteDataContext);

    if (!context) {
        throw new Error("UseRouteData must be used within a RouteDataProvider");
    }

    return context;
};

export default useRouteData;
