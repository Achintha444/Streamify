import InternalAuthDataProvider from "../../../states/internalAuthData/providers/internalAuthDataProvider";
import LoginPageLayout from "../layout/LoginPageLayout";
import "../styles/loginPage.css";

function LoginPage() {
    return (
        <InternalAuthDataProvider>
            <LoginPageLayout />
        </InternalAuthDataProvider>
    );
};

export default LoginPage;
