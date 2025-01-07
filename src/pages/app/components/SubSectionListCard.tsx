import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/SubSectionCard.module.css";

export interface SubSectionListCardItem {
    /**
     * Number
     */
    number: string;
    /**
     * Title
     */
    title: string;
    /**
     * image URL
     */
    imageUrl: string;
}

interface SubSectionListCardProps {
    /**
     * content list
     */
    contentList: SubSectionListCardItem[];
}

/**
 * Common card layout for sub section cards
 */
export const SubSectionListCard: FunctionComponent<SubSectionListCardProps> = (
    props: SubSectionListCardProps): ReactElement => {

    const {
        contentList
    } = props;

    return (
        <Card className={ styles.subSectionCard }>
            <CardContent className={ styles.subSectionCardContent }>
                <Stack spacing={ 2 } direction="column" justifyContent="center">
                    {
                        contentList.map((contentItem: SubSectionListCardItem) => (
                            <Grid key={ contentItem.title } container spacing={ 2 } alignItems="center">
                                <Grid>
                                    <Typography variant="body2">
                                        { contentItem.number }
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <img
                                        className={ styles.subSectionListCardImage }
                                        src={ contentItem.imageUrl }
                                        alt="random"
                                    />
                                </Grid>
                                <Grid>
                                    <Typography variant="body1">
                                        { contentItem.title }
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Stack>
            </CardContent>
        </Card>
    );
};
