import { useEffect } from "react";
import { useNavigate } from "react-router";
import { UIDrawer } from "../../../components/uidrawer/uiDrawer";
import { UiLoader } from "../../../components/uiLoader/uiLoader";
import { MainContentLayout } from "../../../layouts/mainContentLayout";
import { getContentRoutes } from "../../../routes/contentRoutes";
import useInternalAuthData from "../../../states/internalAuthData/hooks/useRouteData";
import useRouteData from "../../../states/routeData/hooks/useRouteData";
import { NotFound } from "../../errors/notFound";

function AppLayout() {
    const { checkIfActiveRoute, activeContentRoute } = useRouteData();
    const navigate = useNavigate();
    const { isAuthenticationLoading, userName, userEmail, isIdTokenRetrievalError } = useInternalAuthData();

    useEffect(() => {
        if (checkIfActiveRoute("/app") || checkIfActiveRoute("/app/")) {
            navigate(getContentRoutes()[0].path);
        }
    }, [ checkIfActiveRoute, navigate ]);

    return (
        isAuthenticationLoading
            ? <UiLoader />
            : !(checkIfActiveRoute("/app") || checkIfActiveRoute("/app/") || isIdTokenRetrievalError)
                ? (
                    <MainContentLayout
                        drawerComponent={ (
                            <UIDrawer
                                email={ userEmail }
                                username={ userName }
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
