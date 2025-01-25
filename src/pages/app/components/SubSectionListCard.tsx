import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
import { addLeadingZero } from "../../../utils/utility";
import styles from "../styles/SubSectionCard.module.css";

/**
 * Sub section list card item
 */
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
     * Subtitle
     */
    subtitle?: string;
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
                <Stack
                    className={ styles.subSectionCardListContainer }
                    spacing={ 2 }
                    direction="column"
                    justifyContent="center"
                >
                    {
                        contentList.map((contentItem: SubSectionListCardItem) => (
                            <Stack direction="row" key={ contentItem.title } spacing={ 2 } alignItems="center">
                                <Grid>
                                    <Typography variant="body2">
                                        { addLeadingZero(contentItem.number) }
                                    </Typography>
                                </Grid>
                                <img
                                    className={ styles.subSectionListCardImage }
                                    src={ contentItem.imageUrl }
                                    alt="random"
                                />
                                <Stack justifyContent="center">
                                    <Typography variant="body1">
                                        { contentItem.title }
                                    </Typography>
                                    {
                                        contentItem.subtitle
                                            && (
                                                <Typography variant="body2">
                                                    { contentItem.subtitle }
                                                </Typography>
                                            )
                                    }
                                </Stack>
                            </Stack>
                        ))
                    }
                </Stack>
            </CardContent>
        </Card>
    );
};
