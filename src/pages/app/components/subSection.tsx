import Stack from "@mui/material/Stack";
import { FunctionComponent, ReactElement, RefObject } from "react";
import { SubSectionTitle } from "./subSectionTitle";
import styles from "../styles/SubSectionLayout.module.css";

/**
 * Sub section grid for displaying multiple cards in a grid layout
 */
interface SubSectionProps {
    /**
     * Title of the sub section
     */
    title?: string | undefined;
    /**
     * Subtitle of the sub section
     */
    subtitle?: string | undefined;
    /**
     * content of the sub section
     */
    content: ReactElement;
    /**
     * Reference to the container element
     */
    containerRef?: RefObject<HTMLDivElement> | null;
}

export const SubSection: FunctionComponent<SubSectionProps> = (
    props: SubSectionProps): ReactElement => {

    const {
        title,
        subtitle,
        content,
        containerRef
    } = props;

    return (
        <Stack
            spacing={ 2 }
            direction="column"
            className={ styles.subSection }
            ref = { containerRef }
        >
            <SubSectionTitle title={ title } subtitle={ subtitle } />

            { content }
        </Stack>
    );
};
