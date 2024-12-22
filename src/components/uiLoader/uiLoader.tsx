import { Stack, Typography } from "@mui/material";
import { FunctionComponent, ReactElement } from "react";
import styles from "./styles/UiLoader.module.css";
import { images } from "../../assets/images";

/**
 * Common loader component
 */
export const UiLoader: FunctionComponent = (): ReactElement => {
    return (
        <Stack
            className={ styles["uiLoaderContainer"] }
            justifyContent={ "center" }
            alignItems={ "center" }
            direction={ "column" }
        >
            <img className={ styles["uiLoaderImage"] } src={ images.loader } alt="loading..." />
            <Typography className={ styles["uiLoaderText"] } typography="h4">
                Loading...
            </Typography>
        </Stack>
    );
};
