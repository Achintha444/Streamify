import { AuthenticatedComponent } from "@asgardeo/auth-react";
import Layout from "./layouts/layout";
import { MainContentLayout } from "./layouts/mainContentLayout";

function App() {
    return (
        <AuthenticatedComponent fallback={ <div>as</div> }>
            <Layout>
                <MainContentLayout content={ <div> asd </div> } title=" " subTitle=" " />
            </Layout>
        </AuthenticatedComponent>
    );
}

export default App;
