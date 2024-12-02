import { useAuthContext } from "@asgardeo/auth-react";
import OverviewPage from "./features/overview/pages/overviewPage";

function App() {
    const { state, signOut } = useAuthContext();


    if (state.isAuthenticated) {
        // TODO: Implement the main app page
        return (
            <div>
				Login Success
                {
                    <p>Welcome { state.username }</p>
                }
                <button onClick={ () => signOut() }>Sign Out</button>
            </div>
        );
    }

    return <OverviewPage />;
}

export default App;
