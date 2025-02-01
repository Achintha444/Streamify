import Container from "@mui/material/Container";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import styles from "./styles/AppContentLayout.module.css";

interface AppContentLayoutProps {
    /**
     * Children of the layout
     */
    children: ReactNode;
}

export const AppContentLayout: FunctionComponent<AppContentLayoutProps> = (
    props: AppContentLayoutProps): ReactElement => {
    const {
        children
    } = props;


    return (
        <Container
            className={ styles.appContentLayout }
        >
            { children }
        </Container>
    );
};
