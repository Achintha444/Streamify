import { useEffect } from "react";
import { useNavigate } from "react-router";
import UIDrawer from "../../../components/uidrawer/uiDrawer";
import { MainContentLayout } from "../../../layouts/mainContentLayout";
import useRouteData from "../../../states/routeData/hooks/useRouteData";

function AppLayout() {
    const { checkIfActiveRoute, activeContentRoute } = useRouteData();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkIfActiveRoute("/app") || checkIfActiveRoute("/app/")) {
            navigate("/app/overview");
        }
    }, [ checkIfActiveRoute, navigate ]);

    return (
        !(checkIfActiveRoute("/app") || checkIfActiveRoute("/app/"))
            ? (
                <MainContentLayout
                    drawerComponent={ <UIDrawer /> }
                    content={ activeContentRoute!.component }
                    title={ activeContentRoute!.pageTitle }
                    subTitle={ activeContentRoute!.pageSubTitle }
                />
            )
            : <div>as</div> // TODO: This need to be replaced with the loading component
    );
}

export default AppLayout;
