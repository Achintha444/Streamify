import { Stack, Typography } from "@mui/material";
import { FunctionComponent, ReactElement } from "react";
import styles from "./styles/UIMainContentTitle.module.css";

interface UiMainContentTitleProps {
    /**
     * Title of the content
     */
    title: string;
    /**
     * Subtitle of the content
     */
    subTitle: string;
}

/**
 * Common Layout for main content
 */
export const UiMainContentTitle: FunctionComponent<UiMainContentTitleProps> = (
    props: UiMainContentTitleProps): ReactElement => {

    const {
        title,
        subTitle
    } = props;

    return (
        <Stack className={ styles["uiMainContentTitleContainer"] } spacing={ 0.5 }>
            <Typography typography="h5" fontSize="24px" letterSpacing="0px">{ title }</Typography>
            <Typography typography="subtitle1">{ subTitle }</Typography>
        </Stack>
    );
};
