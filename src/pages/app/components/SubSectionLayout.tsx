import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/SubSectionLayout.module.css";

interface SubSectionLayoutProps {
    /**
     * Title of the content
     */
    title: string | undefined;
    /**
     * Content of the layout
     */
    content: ReactElement;
}

export const SubSectionLayout: FunctionComponent<SubSectionLayoutProps> = (
    props: SubSectionLayoutProps): ReactElement => {

    const {
        title,
        content
    } = props;

    return (
        <Stack spacing={ 2 } direction="column">
            {
                title && title.length > 0 &&
                <Typography variant="h5" className={ styles.subSectionLayoutTitle }>{ title }</Typography>
            }
            { content }
        </Stack>
    );
};
