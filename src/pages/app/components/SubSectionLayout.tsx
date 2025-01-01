import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement } from "react";
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

export const SubSectionLayout: FunctionComponent<SubSectionLayoutProps> = (
    props: SubSectionLayoutProps): ReactElement => {

    const {
        title,
        displayItems
    } = props;

    return (
        <Stack spacing={1} direction="column">
            {
                title && title.length > 0 &&
                <Typography variant="h6" className={styles.subSectionLayoutTitle}>{title}</Typography>
            }
            <Stack
                direction={{ xs: 'row', md: 'row' }}
                spacing={2}
                sx={{
                    width: '100%',
                    // For mobile: horizontal scroll
                    '@media (max-width: 900px)': {
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth', // Add smooth scrolling
                        WebkitOverflowScrolling: 'touch',
                        flexWrap: 'nowrap',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE/Edge
                        cursor: 'grab',
                        '&::-webkit-scrollbar': {
                            display: 'none', // Safari/Chrome
                        },
                        '&:active': {
                            cursor: 'grabbing',
                        }
                    },
                    // For desktop: maintain equal widths
                    '@media (min-width: 901px)': {
                        flexWrap: 'nowrap',
                        '& > *': {
                            width: displayItems.length === 1 
                                ? '100%' 
                                : displayItems.length === 2 
                                    ? '50%' 
                                    : '33.333%'
                        }
                    }
                }}
                onMouseDown={(e) => {
                    const ele = e.currentTarget;
                    const startX = e.clientX;
                    const scrollLeft = ele.scrollLeft;
                    let isDragging = true;

                    const mouseMoveHandler = (e: MouseEvent) => {
                        if (!isDragging) return;
                        
                        const dx = e.clientX - startX;
                        ele.scrollLeft = scrollLeft - dx;
                    };

                    const mouseUpHandler = () => {
                        isDragging = false;
                        document.removeEventListener('mousemove', mouseMoveHandler);
                        document.removeEventListener('mouseup', mouseUpHandler);
                        
                        // Calculate which card to snap to after dragging ends
                        const cardWidth = 280 + 16; // card width + spacing
                        const targetScroll = Math.round(ele.scrollLeft / cardWidth) * cardWidth;
                        ele.scrollTo({ left: targetScroll, behavior: 'smooth' });
                    };

                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                }}
            >
                {displayItems.map((item, index) => (
                    <Container 
                        key={index} 
                        disableGutters
                        sx={{
                            '@media (max-width: 900px)': {
                                minWidth: '280px',
                                maxWidth: '280px',
                                flexShrink: 0,
                                scrollSnapAlign: 'start',
                                scrollSnapStop: 'always',
                                userSelect: 'none', // Prevent text selection while dragging
                            },
                            '@media (min-width: 901px)': {
                                padding: '0 !important',
                            }
                        }}
                    >
                        {item}
                    </Container>
                ))}
            </Stack>
        </Stack>
    );
};
