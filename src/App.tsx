import { AuthenticatedComponent } from "@asgardeo/auth-react";
import UIDrawer from "./components/uidrawer/uiDrawer";
import Layout from "./layouts/layout";
import { MainContentLayout } from "./layouts/mainContentLayout";

function App() {
    return (
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
    );
}

export default App;
