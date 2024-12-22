import { useAuthContext } from "@asgardeo/auth-react";
import { FunctionComponent, PropsWithChildren, ReactElement, useState } from "react";
import { useNavigate } from "react-router";
import InternalAuthDataContext from "../contexts/internalAuthDataContext";

/**
 * Props interface for the [InternalAuthDataProvider]
 */
export type InternalAuthDataProviderProps = PropsWithChildren;

/**
 * React context provider for the internal authentication data context.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const InternalAuthDataProvider: FunctionComponent<InternalAuthDataProviderProps> = (
    props: InternalAuthDataProviderProps
): ReactElement => {
    const { children } = props;

    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    const [ isAuthenticationLoading, setIsAuthenticationLoading ] = useState<boolean>(true);

    /**
     * Navigates to the provided route if the user is authenticated.
     *
     * @param route - Route to navigate to.
     */
    const navigateToRouteOnAuthentication = (route: string): void => {
        setIsAuthenticationLoading(true);

        isAuthenticated().then((response) => {
            if (response) {
                navigate(route);
            }
        }).finally(() => {
            setIsAuthenticationLoading(false);
        });
    };

    /**
     * Navigates to the provided route if the user is not authenticated.
     *
     * @param route - Route to navigate to.
     */
    const navigateToRouterIfNotAuthenticated = (route: string): void => {
        setIsAuthenticationLoading(true);

        isAuthenticated().then((response) => {
            if (!response) {
                navigate(route);
            }
        }).finally(() => {
            setIsAuthenticationLoading(false);
        });
    };

    return (
        <InternalAuthDataContext.Provider
            value={ {
                isAuthenticationLoading: isAuthenticationLoading,
                navigateToRouteOnAuthentication: navigateToRouteOnAuthentication,
                navigateToRouterIfNotAuthenticated: navigateToRouterIfNotAuthenticated
            } }
        >
            { children }
        </InternalAuthDataContext.Provider>
    );
};

export default InternalAuthDataProvider;
