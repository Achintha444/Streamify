import Layout from "../../../layouts/layout";
import RouteDataProvider from "../../../states/routeData/providers/routeDateProvider";
import AppLayout from "../components/AppLayout";

function App() {
    return (
        <RouteDataProvider>
            <Layout>
                <AppLayout />
            </Layout>
        </RouteDataProvider>
    );
}

export default App;
