import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Fragment, FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import styles from "../styles/SubSectionLayout.module.css";

interface SubSectionLayoutProps {
    /**
     * Title of the content
     */
    title?: string | undefined;
    /**
     * Content of the layout
     */
    displayItems: ReactElement[];
}

/**
 * Interface for drag constraints
 */
interface DragConstraints {
    left: number;
    right: number;
}

export const SubSectionLayout: FunctionComponent<SubSectionLayoutProps> = (
    props: SubSectionLayoutProps
): ReactElement => {
    const { title, displayItems } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [ dragConstraints, setDragConstraints ] = useState<DragConstraints>({ left: 0, right: 0 });

    useEffect(() => {
        const updateDragConstraints = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth: number = containerRef.current.offsetWidth;
                const contentWidth: number = contentRef.current.scrollWidth;
                const maxDrag: number = Math.max(contentWidth - containerWidth, 0);

                setDragConstraints({ left: -maxDrag, right: 0 });
            }
        };

        updateDragConstraints();

        // Add a resize event listener to handle screen size changes
        window.addEventListener("resize", updateDragConstraints);

        return () => {
            window.removeEventListener("resize", updateDragConstraints);
        };
    }, [ displayItems ]);

    return (
        <Stack spacing={ 1 } direction="column" ref={ containerRef }>
            { title && title.length > 0 && (
                <Typography variant="h6" className={ styles.subSectionLayoutTitle }>
                    { title }
                </Typography>
            ) }

            <motion.div drag="x" dragConstraints={ dragConstraints }>
                <Stack
                    direction="row"
                    spacing={ 2 }
                    className={ styles.subSectionLayoutContent }
                    ref={ contentRef }
                >
                    { displayItems.map((item, index) => (
                        <Fragment key={ index }>
                            { item }
                        </Fragment>
                    )) }
                </Stack>
            </motion.div>
        </Stack>
    );
};
