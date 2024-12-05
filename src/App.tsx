import { AuthenticatedComponent } from "@asgardeo/auth-react";
import UIDrawer from "./components/uidrawer/uiDrawer";
import Layout from "./layouts/layout";
import { MainContentLayout } from "./layouts/mainContentLayout";
import RouteDataProvider from "./states/routeData/providers/routeDateProvider";

function App() {
    return (
        <RouteDataProvider>
            <AuthenticatedComponent fallback={ <div>as</div> }>
                <Layout>
                    <MainContentLayout
                        drawerComponent={ <UIDrawer /> }
                        content={ <div> asd </div> }
                        title=" "
                        subTitle=" "
                    />
                </Layout>
            </AuthenticatedComponent>
        </RouteDataProvider>
    );
}

export default App;
