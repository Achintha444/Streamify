import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactElement } from "react";
import { SubSectionTitle } from "./subSectionTitle";

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
        <Stack
            spacing={ 2 }
            direction="column"
        >
            <SubSectionTitle title={ title } subtitle={ subtitle } />

            <Grid container>
                <Grid>
                    <Stack spacing={ 2 }>
                        { displayItems[0] }
                        { displayItems[1] }
                    </Stack>
                </Grid>
                <Grid>
                    { displayItems[2] }
                </Grid>
            </Grid>
        </Stack>
    );
};
