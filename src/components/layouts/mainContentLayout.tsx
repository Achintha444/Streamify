import Grid from "@mui/material/Grid2/Grid2";
import { FunctionComponent, ReactElement } from "react";
import styles from "./styles/MainLayout.module.css";
import { isScreenMobileOrSmall } from "../../utils/utility";
import UIDrawer from "../uidrawer/uiDrawer";
import { UiMainContentTitle } from "../uiMainContentTitle/uiMainContentTitle";

interface MainContentLayoutProps {
    /**
     * Title of the content
     */
    title: string;
    /**
     * Subtitle of the content
     */
    subTitle: string;
    /**
     * Content of the layout
     */
    content: ReactElement
}

/**
 * Common Layout for main content
 */
export const MainContentLayout: FunctionComponent<MainContentLayoutProps> = (
    props: MainContentLayoutProps): ReactElement => {
    const {
        title,
        subTitle,
        content
    } = props;

    return (
        !isScreenMobileOrSmall()
            ? (
                <Grid
                    container
                    direction="row"
                    wrap="wrap"
                    flexWrap="wrap"
                    className={ `${styles.mainContentLayout} ${styles.mainContentLayoutLarge}` }
                >
                    <Grid size="auto">
                        <UIDrawer />
                    </Grid>
                    <Grid
                        className={ styles["contentContainer"] }
                        direction="column"
                        container
                        size="grow"
                    >
                        <Grid size="auto">
                            <UiMainContentTitle title={ title } subTitle={ subTitle } />
                        </Grid>
                        <Grid size="grow" sx={ { border: "1px solid red" } }>
                            { content }
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    direction="row"
                    wrap="wrap"
                    flexWrap="wrap"
                    className={ `${styles.mainContentLayout} ${styles.mainContentLayoutMobile}` }
                >
                    <Grid direction="column" container size="grow">
                        <Grid direction="row" container size="grow">
                            <Grid size="auto">
                                <UIDrawer />
                            </Grid>
                            <Grid size="grow" sx={ { border: "1px solid red" } }>
                                <UiMainContentTitle title={ title } subTitle={ subTitle } />
                            </Grid>
                        </Grid>
                        <Grid size="grow" sx={ { border: "1px solid red" } }>
                            { content }
                        </Grid>
                    </Grid>
                </Grid>
            )
    );
};
