import { ReactNode } from "react";
import { IconMenuListItemState } from "./IconMenuListItemState";

export default interface IconMenuListItem {
    /**
     * Icon to display
     */
    icon: ReactNode;
    /**
     * Title of the icon menu item
     */
    title: string;
    /**
     * state of the icon menu item
     */
    state?: IconMenuListItemState;
    /**
     * onClick event handler
     */
    onClick?: () => void;
// eslint-disable-next-line semi
}
