import { useAuthContext } from "@asgardeo/auth-react";
import { FunctionComponent, PropsWithChildren, ReactElement, useCallback, useEffect, useState } from "react";
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

    const { isAuthenticated, getDecodedIDToken } = useAuthContext();
    const navigate = useNavigate();

    const [ isAuthenticationLoading, setIsAuthenticationLoading ] = useState<boolean>(true);
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userName, setUserName ] = useState<string>("");
    const [ isIdTokenRetrievalError, setIdTokenRetrievalError ] = useState<boolean>(false);

    // Effect to handle user data on authentication changes
    useEffect(() => {
        const loadUserData = async () => {
            try {
                setIsAuthenticationLoading(true);
                const authenticated = await isAuthenticated();

                if (authenticated) {
                    // Only fetch token and set user data if authenticated
                    const idToken = await getDecodedIDToken();

                    setUserEmail(idToken.username);
                    setUserName(idToken.given_name);
                    setIdTokenRetrievalError(false);
                } else {
                    // Clear user data when not authenticated
                    setUserEmail("");
                    setUserName("");
                }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setIdTokenRetrievalError(true);
                // Clear user data on error
                setUserEmail("");
                setUserName("");
            } finally {
                setIsAuthenticationLoading(false);
            }
        };

        loadUserData();
    }, []); //

    /**
     * Navigates to the provided route if the user is authenticated.
     *
     * @param route - Route to navigate to.
     */
    const navigateToRouteOnAuthentication = useCallback((route: string): void => {
        setIsAuthenticationLoading(true);

        isAuthenticated().then((response) => {
            if (response) {
                navigate(route);
            }
        }).finally(() => {
            setIsAuthenticationLoading(false);
        });
    }, [ isAuthenticated, navigate ]);

    return (
        <InternalAuthDataContext.Provider
            value={ {
                isAuthenticationLoading: isAuthenticationLoading,
                isIdTokenRetrievalError: isIdTokenRetrievalError,
                navigateToRouteOnAuthentication: navigateToRouteOnAuthentication,
                userEmail: userEmail,
                userName: userName
            } }
        >
            { children }
        </InternalAuthDataContext.Provider>
    );
};

export default InternalAuthDataProvider;
