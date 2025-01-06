import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Fragment, FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import styles from "../styles/SubSectionLayout.module.css";

interface SubSectionLayoutProps {
    title?: string;
    displayItems: ReactElement[];
}

export const SubSectionLayout: FunctionComponent<SubSectionLayoutProps> = ({
    title,
    displayItems,
}): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [dragConstraints, setDragConstraints] = useState<{ left: number; right: number }>({
        left: 0,
        right: 0,
    });

    useEffect(() => {
        const updateDragConstraints = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const cardSpacing = 16; // Spacing between cards (px), equivalent to `spacing={2}` in the Stack
                const cardWidth = contentRef.current.children[0]?.clientWidth || 0;
                const totalCards = displayItems.length;
                const contentWidth = totalCards * cardWidth + (totalCards - 1) * cardSpacing;

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
    }, [displayItems]);

    return (
        <Stack
            spacing={1}
            direction="column"
            ref={containerRef}
            style={{
                overflow: "hidden", // Prevent overflow outside the container
                position: "relative",
            }}
        >
            {title && title.length > 0 && (
                <Typography variant="h6" className={styles.subSectionLayoutTitle}>
                    {title}
                </Typography>
            )}

            <motion.div
                drag="x"
                dragConstraints={dragConstraints}
                style={{
                    display: "flex",
                    position: "relative",
                    cursor: "grab",
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    ref={contentRef}
                    className={styles.subSectionLayoutContent}
                    style={{
                        display: "flex",
                    }}
                >
                    {displayItems.map((item, index) => (
                        <Fragment key={index}>{item}</Fragment>
                    ))}
                </Stack>
            </motion.div>
        </Stack>
    );
};
