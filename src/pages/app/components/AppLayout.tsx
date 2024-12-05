import UIDrawer from "../../../components/uidrawer/uiDrawer";
import { MainContentLayout } from "../../../layouts/mainContentLayout";
import useRouteData from "../../../states/routeData/hooks/useRouteData";

function AppLayout() {
    const { activeContentRoute } = useRouteData();

    return (
        <MainContentLayout
            drawerComponent={ <UIDrawer /> }
            content={ activeContentRoute!.component }
            title={ activeContentRoute!.pageTitle }
            subTitle={ activeContentRoute!.pageSubTitle }
        />
    );
}

export default AppLayout;
