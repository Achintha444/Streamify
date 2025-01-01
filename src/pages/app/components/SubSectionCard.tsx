import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Fragment, FunctionComponent, ReactElement } from "react";
import styles from "../styles/SubSectionCard.module.css";

interface SubSectionCardProps {
    /**
     * Title of the content
     */
    title: string;
    /**
     * Main string content
     */
    content: string;
    /**
     * Image URL
     */
    imageUrl?: string | undefined;
    /**
     * caption
     */
    caption?: string | undefined;
}

/**
 * Common card layout for sub section cards
 */
export const SubSectionCard: FunctionComponent<SubSectionCardProps> = (
    props: SubSectionCardProps): ReactElement => {

    const {
        title,
        content,
        imageUrl,
        caption
    } = props;

    // Create a string with line breaks for the main content
    const createMainContentString = (content: string): string | JSX.Element[] => {
        const contentArray: string[] = content.split(" ");

        return contentArray.length === 1
            ? content
            : contentArray.map((item, index) => (
                <Fragment key={ index }>
                    { item }
                    <br />
                </Fragment>
            ));
    };

    return (
        <Card>
            <CardContent>
                <Grid container spacing={ 2 }>
                    {
                        imageUrl
                            ? (
                                <Grid size={ 2 }>
                                    <img className={ styles.subSectionCardImage } src={ imageUrl } alt="random" />
                                </Grid>
                            ) : null
                    }
                    <Grid>
                        <Typography variant="body2">
                            { title }
                        </Typography>
                        <Typography fontSize="60px" fontWeight="200" color="text.primary">
                            { createMainContentString(content) }
                        </Typography>
                        {
                            caption
                                ? (
                                    <Typography variant="caption">
                                        { caption }
                                    </Typography>
                                ) : null
                        }
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
