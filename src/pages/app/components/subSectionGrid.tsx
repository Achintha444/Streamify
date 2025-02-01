import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactElement } from "react";
import { SubSection } from "./subSection";
import styles from "../styles/SubSectionLayout.module.css";

/**
 * Sub section grid for displaying multiple cards in a grid layout
 */
interface SubSectionGridProps {
    /**
     * Title of the sub section
     */
    title: string;
    /**
     * Subtitle of the sub section
     */
    subtitle: string;
    /**
     * List of items to display in the sub section
     */
    displayItems: ReactElement[];
}

export const SubSectionGrid: FunctionComponent<SubSectionGridProps> = (
    props: SubSectionGridProps): ReactElement => {

    const {
        title,
        subtitle,
        displayItems
    } = props;

    return (
        <SubSection
            title={ title }
            subtitle={ subtitle }
            content={
                (
                    <Grid container spacing={ 2 } className={ styles.subSectionGrid }>
                        <Grid size={ { md: 6, sm: 12, xs: 12 } }>
                            <Stack spacing={ 2 }>
                                { displayItems[0] }
                                { displayItems[1] }
                            </Stack>
                        </Grid>
                        <Grid size={ { md: 6, sm: 12, xs: 12 } }>
                            { displayItems[2] }
                        </Grid>
                    </Grid>
                )
            }
        />
    );
};
