import { AuthenticatedComponent } from "@asgardeo/auth-react";
import BillboardDataProvider from "../../../states/billboardData/providers/billboardDataProvider";
import InternalAuthDataProvider from "../../../states/internalAuthData/providers/internalAuthDataProvider";
import RouteDataProvider from "../../../states/routeData/providers/routeDateProvider";
import { NotFound } from "../../errors/notFound";
import AppLayout from "../components/AppLayout";

function App() {
    return (
        <AuthenticatedComponent fallback={ <NotFound /> }>
            <RouteDataProvider>
                <InternalAuthDataProvider>
                    <BillboardDataProvider>
                        <AppLayout />
                    </BillboardDataProvider>
                </InternalAuthDataProvider>
            </RouteDataProvider>
        </AuthenticatedComponent>
    );
}

export default App;
