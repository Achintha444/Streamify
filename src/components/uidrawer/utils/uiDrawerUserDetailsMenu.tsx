import { useAuthContext } from "@asgardeo/auth-react";
import { Logout01Icon } from "hugeicons-react";
import IconMenuListItem from "../../uiIconMenu/models/IconMenuListItem";
import { IconMenuListItemState } from "../../uiIconMenu/models/IconMenuListItemState";

export const getUIDrawerUserDetails = (): IconMenuListItem[] => {

    const { signOut } = useAuthContext();

    return [
        {
            icon: <Logout01Icon />,
            onClick: () => signOut(),
            state: IconMenuListItemState.danger,
            title: "logout"
        }
    ];
};
