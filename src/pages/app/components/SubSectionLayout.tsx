import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Fragment, FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { isScreenMobileOrSmall, isScreenTabletOrSmaller } from "../../../utils/utility";
import styles from "../styles/SubSectionLayout.module.css";

/**
 * Sub section layout for displaying multiple cards in a horizontal scrollable layout
 */
interface SubSectionLayoutProps {
    /**
     * Title of the sub section
     */
    title?: string;
    /**
     * Subtitle of the sub section
     */
    subtitle?: string;
    /**
     * List of items to display in the sub section
     */
    displayItems: ReactElement[];
}

export const SubSectionLayout: FunctionComponent<SubSectionLayoutProps> = (
    props: SubSectionLayoutProps): ReactElement => {

    const {
        title,
        subtitle,
        displayItems
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [ dragConstraints, setDragConstraints ] = useState<{ left: number; right: number }>({
        left: 0,
        right: 0
    });

    useEffect(() => {
        const updateDragConstraints = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const cardSpacing = 16; // Spacing between cards (px), equivalent to `spacing={2}` in the Stack
                const cardWidth = contentRef.current.children[0]?.clientWidth || 0;

                let totalCards = displayItems.length;

                if (isScreenMobileOrSmall()) {
                    totalCards = displayItems.length + 0.16;
                } else if (isScreenTabletOrSmaller()) {
                    totalCards = displayItems.length - 0.42;
                }

                const contentWidth = (totalCards * cardWidth) + cardSpacing;

                // Maximum draggable distance to keep the last card aligned
                const maxDrag = Math.max(contentWidth - containerWidth, 0);

                setDragConstraints({ left: -maxDrag, right: 0 });
            }
        };

        updateDragConstraints();

        // Update constraints on window resize
        window.addEventListener("resize", updateDragConstraints);

        return () => {
            window.removeEventListener("resize", updateDragConstraints);
        };
    }, [ displayItems ]);

    return (
        <Stack
            spacing={ 2 }
            direction="column"
            className={ styles.subSectionLayout }
            ref={ containerRef }
        >
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

            <motion.div
                drag="x"
                dragConstraints={ dragConstraints }
                className={ styles.subSectionLayoutContainer }
            >
                <Stack
                    direction="row"
                    spacing={ 2 }
                    ref={ contentRef }
                    className={ styles.subSectionLayoutContent }
                >
                    { displayItems.map((item, index) => (
                        <Fragment key={ index }>{ item }</Fragment>
                    )) }
                </Stack>
            </motion.div>
        </Stack>
    );
};
