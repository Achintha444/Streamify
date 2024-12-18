
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Logout01Icon } from "hugeicons-react";
import { FunctionComponent, ReactElement } from "react";
import styles from "./styles/UIIconMenu.module.css";
import Typography from "@mui/material/Typography";

interface UIIconMenuListProps {
    iconMenuList: string;
}

export const UIIconMenuList: FunctionComponent<UIIconMenuListProps> = (
    props: UIIconMenuListProps): ReactElement => {

    const {
        iconMenuList
    } = props;

    return (
        <div className={styles["uiIconMenuContainer"]}>
            <MenuList className={styles["uiIconMenuList"]}>
                <MenuItem className={styles["uiIconMenuListItem"]}>
                    <ListItemIcon className={ styles["uiIconMenuListItemIcon"] }>
                        <Logout01Icon />
                    </ListItemIcon>
                    <ListItemText
                        className={styles["uiIconMenuListItemText"]}
                        primary={(
                            <Typography variant="body2">
                                Cut
                            </Typography>)
                        } />
                </MenuItem>
                <MenuItem className={styles["uiIconMenuListItem"]}>
                    <ListItemIcon className={ styles["uiIconMenuListItemIcon"] }>
                        <Logout01Icon />
                    </ListItemIcon>
                    <ListItemText
                        className={styles["uiIconMenuListItemText"]}
                        primary={(
                            <Typography variant="body2">
                                Cut
                            </Typography>)
                        } />
                </MenuItem>
            </MenuList>
        </div>
    );
}
