import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/SubSectionLayout.module.css";

/**
 * Sub section grid for displaying multiple cards in a grid layout
 */
interface SubSectionTitleProps {
    /**
     * Title of the sub section
     */
    title?: string;
    /**
     * Subtitle of the sub section
     */
    subtitle?: string;
}

export const SubSectionTitle: FunctionComponent<SubSectionTitleProps> = (
    props: SubSectionTitleProps): ReactElement => {

    const {
        title,
        subtitle
    } = props;

    return (
        <Stack direction="column" >
            { title && title.length > 0 && (
                <Typography variant="h6" className={ styles.subSectionLayoutTitle }>
                    { title }
                </Typography>
            ) }
            { subtitle && subtitle.length > 0 && (
                <Typography variant="body2" className={ styles.subSectionLayoutTitle }>
                    { subtitle }
                </Typography>
            ) }
        </Stack>
    );
};
