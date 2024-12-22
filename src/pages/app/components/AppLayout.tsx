import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UIDrawer } from "../../../components/uidrawer/uiDrawer";
import { UiLoader } from "../../../components/uiLoader/uiLoader";
import { MainContentLayout } from "../../../layouts/mainContentLayout";
import { getContentRoutes } from "../../../routes/contentRoutes";
import useRouteData from "../../../states/routeData/hooks/useRouteData";
import { NotFound } from "../../errors/notFound";

function AppLayout() {
    const { checkIfActiveRoute, activeContentRoute } = useRouteData();
    const navigate = useNavigate();
    const { getDecodedIDToken } = useAuthContext();

    const [ loading, setLoading ] = useState<boolean>(true);
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userName, setUserName ] = useState<string>("");
    const [ isIdTokenRetrievalError, setIdTokenRetrievalError ] = useState<boolean>(false);

    useEffect(() => {
        if (checkIfActiveRoute("/app") || checkIfActiveRoute("/app/")) {
            navigate(getContentRoutes()[0].path);
        }
    }, [ checkIfActiveRoute, navigate ]);

    useEffect(() => {
        getDecodedIDToken().then((idToken) => {
            setUserEmail(idToken.username);
            setUserName(idToken.given_name);
        }).catch(() => {
            setIdTokenRetrievalError(true);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        loading
            ? <UiLoader />
            : !(checkIfActiveRoute("/app") || checkIfActiveRoute("/app/") || isIdTokenRetrievalError)
                ? (
                    <MainContentLayout
                        drawerComponent={ (
                            <UIDrawer
                                email={ userEmail }
                                username={ userName }
                                onSignout={ () => { /* TODO: Implement signout */ } }
                                checkIfActiveRoute={ checkIfActiveRoute }
                            />) }
                        content={ activeContentRoute!.component }
                        title={ activeContentRoute!.pageTitle }
                        subTitle={ activeContentRoute!.pageSubTitle }
                    />
                )
                : <NotFound />
    );
}

export default AppLayout;
