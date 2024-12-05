import UIDrawer from "./components/uidrawer/uiDrawer";
import Layout from "./layouts/layout";
import { MainContentLayout } from "./layouts/mainContentLayout";
import RouteDataProvider from "./states/routeData/providers/routeDateProvider";

function App() {
    return (
        <RouteDataProvider>
            <Layout>
                <MainContentLayout
                    drawerComponent={ <UIDrawer /> }
                    content={ <div> asd </div> }
                    title=" "
                    subTitle=" "
                />
            </Layout>
        </RouteDataProvider>
    );
}

export default App;
