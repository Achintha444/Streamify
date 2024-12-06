import RouteDataProvider from "../../../states/routeData/providers/routeDateProvider";
import AppLayout from "../components/AppLayout";

function App() {
    return (
        <RouteDataProvider>
            <AppLayout />
        </RouteDataProvider>
    );
}

export default App;
