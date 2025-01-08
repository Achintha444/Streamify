
import Grow from "@mui/material/Grow";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import { FunctionComponent, ReactElement, RefObject } from "react";
import IconMenuListItem from "./models/IconMenuListItem";
import { IconMenuListItemState } from "./models/IconMenuListItemState";
import styles from "./styles/UIIconMenu.module.css";

interface UIIconMenuListProps <T = HTMLElement> {
    /**
     * List of icon menu items
     */
    iconMenuList: IconMenuListItem[];
    /**
     * Is the icon menu list open
     */
    open: boolean;
    /**
     * Anchor element
     */
    anchorElement: RefObject<T>;
}

export const UIIconMenuList: FunctionComponent<UIIconMenuListProps> = (
    props: UIIconMenuListProps): ReactElement => {

    const {
        iconMenuList,
        open,
        anchorElement
    } = props;

    /**
     * Get the state of the icon menu list item
     */
    const getStateOfIconMenuListItem = (state: IconMenuListItemState = IconMenuListItemState.default): string => {
        switch (state) {
            case IconMenuListItemState.default:
                return styles.uiIconMenuListItemStateDefault;
            case IconMenuListItemState.danger:
                return styles.uiIconMenuListItemStateDanger;
        }
    };

    return (
        <Popper
            open = { open }
            anchorEl={ anchorElement.current }
            placement="top-start"
            transition
            disablePortal
            modifiers={ [
                { name: "offset", options: { offset: [ 0, 8 ] } } // Offset for spacing
            ] }
            style={ {
                width: anchorElement.current ? `${anchorElement.current.offsetWidth}px` : "auto"
            } }
            className={ styles["uiIconMenuPopper"] }
        >
            { ({ TransitionProps }) => (
                <Grow { ...TransitionProps } >
                    <Paper elevation={ 0 } className={ styles["uiIconMenuContainer"] }>
                        <MenuList className={ styles["uiIconMenuList"] }>
                            { iconMenuList.map((iconMenuListItem: IconMenuListItem) => (
                                <MenuItem
                                    className={ styles["uiIconMenuListItem"] }
                                    onClick={ iconMenuListItem.onClick }
                                    key={ iconMenuListItem.title }
                                >
                                    <ListItemIcon
                                        className={ `${styles.uiIconMenuListItemIcon} 
                                                ${getStateOfIconMenuListItem(iconMenuListItem.state)}` }
                                    >
                                        { iconMenuListItem.icon }
                                    </ListItemIcon>
                                    <ListItemText
                                        className={ styles["uiIconMenuListItemText"] }
                                        primary={
                                            (<Typography
                                                variant="body2"
                                                className={ getStateOfIconMenuListItem(iconMenuListItem.state) }
                                            >
                                                { iconMenuListItem.title }
                                            </Typography>)
                                        }
                                    />
                                </MenuItem>
                            )) }
                        </MenuList>
                    </Paper>
                </Grow>
            ) }
        </Popper>

    );
};
