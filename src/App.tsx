import { useAuthContext } from "@asgardeo/auth-react";
import LoginPage from "./components/pages/login/LoginPage"

function App() {
	const { state, signOut } = useAuthContext();


	if (state.isAuthenticated) {
		// TODO: Implement the main app page
		return (
			<div>
				Login Success
				{
					<p>Welcome {state.username}</p>
				}
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
			);
	}
	return <LoginPage />
}

export default App
