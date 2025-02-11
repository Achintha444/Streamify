import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
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
    /**
     * is error text
     */
    isError?: boolean | undefined;
    /**
     * is positive text
     */
    isPositive?: boolean | undefined;
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
        caption,
        isError,
        isPositive
    } = props;

    /**
     * Get the text class name based on the error and positive state
     */
    const getTextClassName = (): string =>
        `${isError ? styles.errorText : ""} ${isPositive ? styles.positiveText : ""}`;

    return (
        <Card className={ styles.subSectionCard }>
            <CardContent className={ styles.subSectionCardContent }>
                <Grid height="100%" container spacing={ 2 } sx={ { alignItems: "stretch" } }>
                    {
                        imageUrl
                            ? (
                                <Grid>
                                    <img className={ styles.subSectionCardImage } src={ imageUrl } alt="random" />
                                </Grid>
                            ) : null
                    }
                    <Grid
                        container
                        size={ imageUrl ? "grow" : undefined }
                        direction="column"
                        justifyContent="center"
                        spacing={ 1 }
                    >
                        <Typography
                            variant="body2"
                            className={ getTextClassName() }
                        >
                            { title }
                        </Typography>
                        <Typography
                            variant="h3"
                            className={ getTextClassName() }
                        >
                            { content }
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
