import Grid from "@mui/material/Grid2/Grid2";
import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { AppContentLayout } from "./AppContentLayout";
import styles from "./styles/MainLayout.module.css";
import { UiMainContentTitle } from "../components/uiMainContentTitle/uiMainContentTitle";
import { isScreenMobileOrSmall } from "../utils/utility";

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
     * Drawer component of the layout
     */
    drawerComponent: ReactNode;
    /**
     * Content of the layout
     */
    content: ReactNode;
}

/**
 * Common Layout for main content
 */
export const MainContentLayout: FunctionComponent<MainContentLayoutProps> = (
    props: MainContentLayoutProps): ReactElement => {
    const {
        title,
        subTitle,
        drawerComponent,
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
                        { drawerComponent }
                    </Grid>
                    <Grid
                        className={ styles.contentContainer }
                        direction="column"
                        container
                        size="grow"
                    >
                        <Grid size="auto">
                            <UiMainContentTitle title={ title } subTitle={ subTitle } />
                        </Grid>
                        <Grid size="grow">
                            <AppContentLayout>
                                { content }
                            </AppContentLayout>
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
                    <Grid direction="column" container size="auto">
                        <Stack direction="row">
                            { drawerComponent }
                            <UiMainContentTitle title={ title } subTitle={ subTitle } />
                        </Stack>
                        <AppContentLayout>
                            { content }
                        </AppContentLayout>
                    </Grid>
                </Grid>
            )
    );
};
