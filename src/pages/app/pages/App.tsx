import { AuthenticatedComponent } from "@asgardeo/auth-react";
import RouteDataProvider from "../../../states/routeData/providers/routeDateProvider";
import { NotFound } from "../../errors/notFound";
import AppLayout from "../components/AppLayout";

function App() {
    return (
        <AuthenticatedComponent fallback={ <NotFound /> }>
            <RouteDataProvider>
                <AppLayout />
            </RouteDataProvider>
        </AuthenticatedComponent>
    );
}

export default App;
