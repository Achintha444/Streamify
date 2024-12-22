import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowLeft01Icon, CallIcon } from "hugeicons-react";
import { FunctionComponent, ReactElement } from "react";
import { useNavigate } from "react-router";
import styles from "./styles/notFound.module.css";
import { images } from "../../assets/images";

export const NotFound: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Grid className={ styles["notFoundContainer"] } container spacing={ 2 }>
            <Grid
                className={ `${styles["notFoundImageInnerContainer"]} ${styles["notFoundImageContainer"]}` }
                size={ { md: 6, sm: 12, xs: 12 } }>
                <img src={ images.notFound } alt="loading..." />
            </Grid>
            <Grid
                className={ `${styles["notFoundImageInnerContainer"]} ${styles["notFoundTextContainer"]}` }
                size={ { md: 6, sm: 12, xs: 12 } }>
                <Stack className={ styles["notFoundImageTextStack"] } spacing={ 4 }>
                    <Stack
                        justifyContent={ "center" }
                        alignItems="flex-start"
                        direction={ "column" }
                        spacing={ 1 }
                    >
                        <Typography variant="h4" className={ styles["notFoundMainText"] }>
                            Ooops..
                        </Typography>
                        <Typography variant="body1">
                            We couldn’t find the page you were looking for.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="subtitle1">
                            Here’s what you can do:
                        </Typography>
                        <ul className={ styles["notFoundTextList"] }>
                            <li>
                                <Typography variant="subtitle1">
                                    If you typed the URL manually, make sure that it is spelled correctly.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="subtitle1">
                                    Head back to the homepage and try navigating from there.
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant="subtitle1">
                            We’re sorry for the inconvenience.
                            If you need further help, don’t hesitate to reach out to our
                            support team—we’re here for you!"
                        </Typography>
                    </Stack>
                    <Grid container width="100%" direction={ "row" } spacing={ 1 } alignItems="center">
                        <Grid size="grow">
                            <Button
                                fullWidth
                                startIcon={ <ArrowLeft01Icon /> }
                                onClick={ handleBack }>
                                 Go Back
                            </Button>
                        </Grid>
                        <Grid size="grow">
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={ <CallIcon /> }>
                            Support
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    );
};
