import { useAuthContext } from "@asgardeo/auth-react";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { images } from "../../../assets/images";
import { UiLoader } from "../../../components/uiLoader/uiLoader";
import useInternalAuthData from "../../../states/internalAuthData/hooks/useRouteData";
import { links } from "../../../utils/links";
import "../styles/loginPage.css";

function LoginPageLayout() {

    const { signIn } = useAuthContext();
    const { isAuthenticationLoading, navigateToRouteOnAuthentication } =  useInternalAuthData();

    useEffect(() => {
        navigateToRouteOnAuthentication("/app");
    }, [ navigateToRouteOnAuthentication ]);

    return (
        !isAuthenticationLoading
            ? (
                <>
                    <Grid className="side-image-holder" size={ { md: 5, sm: 0 } }>
                        <img src={ images.loginSide } />
                        <Stack
                            className="side-image-content"
                            direction="column"
                        >
                            <Stack className="side-image-content-top">
                                <img src={ images.logoWhite } />
                                <Typography variant="subtitle1" className="side-image-content-top-text">
                                    Information Dashboard
                                </Typography>
                            </Stack>
                            <div className="side-image-content-bottom">
                                <Typography variant="h4" className="side-image-content-bottom-text">
                                    Elevate Your Music Experience with Streamify
                                </Typography>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid className="side-image-holder-sm" size={ { md: 0, sm: 4, xs: 4 } }>
                        <img src={ images.loginSideSm } />
                        <Stack
                            className="side-image-content-sm"
                            direction="column"
                        >
                            <Stack className="side-image-content-top-sm">
                                <img src={ images.logoWhite } />
                                <Typography variant="subtitle1" className="side-image-content-top-text-sm">
                                    Information Dashboard
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid className="login-content-holder" size={ { md: 7, sm: 4, xs: 4 } }>
                        <Stack className="login-content">
                            <Stack className="login-content-header-form" spacing={ 8 }>
                                <Stack className="login-content-header">
                                    <Typography variant="h4" className="login-content-title">
                                        Welcome Back
                                    </Typography>
                                    <Typography variant="body1" className="login-content-main-subtitle">
                                        Sign-in with your official Streamify account
                                    </Typography>
                                </Stack>
                                <Stack className="login-content-form" spacing={ 3 }>
                                    <Button
                                        onClick={ () => signIn() }
                                        variant="contained"
                                        startIcon={ (<img
                                            src={ images.asgadeoLogo }
                                            className="login-form-button-icon" />) }
                                    >
                                        Continue with Asgardeo
                                    </Button>
                                    <Typography variant="subtitle2" className="login-content-subtitle">
                                        If you do not have an account, please reach out to your system
                                        administrator for access. They will provide you with the necessary credentials
                                        to log in and access the dashboard. For any further assistance or
                                        troubleshooting, feel free to contact support at
                                        <a href={ links.streamifyPortfolio } target="_blank">admin@streamify.com</a>.
                                    </Typography>
                                    <Typography variant="subtitle2" className="login-content-subtitle">
                                        <i>
                                            <b>Note:</b> Since this is a demo application, you can use the following
                                            credentials to log in. Use <a>"test@streamify.com"</a> as the username
                                            and <a>"Test@123"</a> as the password.
                                        </i>
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Typography variant="caption" className="login-content-terms">
                                By sign in you are agreeing to our
                                <a href={ links.streamifyPortfolio } target="_blank">privacy policy</a>
                                and our <a href={ links.streamifyPortfolio } target="_blank">terms and conditions</a>.
                            </Typography>
                        </Stack>
                    </Grid>
                </>
            ) : (
                <UiLoader />
            )
    );
};

export default LoginPageLayout;
