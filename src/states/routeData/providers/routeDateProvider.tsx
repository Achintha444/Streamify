import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { useLocation } from "react-router";
import RouteDataContext from "../contexts/routeDataContext";

/**
 * Props interface for the Branding preference provider.
 */
export type RouteDataProviderProps = PropsWithChildren;

/**
 * React context provider for the router data context.
 *
 * @param props - Props injected to the component.
 * @returns Router Data context instance.
 */
const RouteDataProvider: FunctionComponent<RouteDataProviderProps> = (
    props: RouteDataProviderProps
): ReactElement => {
    const { children } = props;

    const { pathname } = useLocation();

    const checkIfActiveRoute = (route: string): boolean => {
        return pathname === route;
    };

    return (
        <RouteDataContext.Provider
            value={ {
                activeRoute: pathname,
                checkIfActiveRoute: checkIfActiveRoute
            } }
        >
            { children }
        </RouteDataContext.Provider>
    );
};

export default RouteDataProvider;
