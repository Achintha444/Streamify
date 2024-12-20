
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { Cancel01Icon, Menu02Icon } from "hugeicons-react";
import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { UIDrawerVariant } from "./models/uidrawerVariant";
import styles from "./styles/UIDrawer.module.css";
import { getUIDrawerUserDetails } from "./utils/uiDrawerUserDetailsMenu";
import { images } from "../../assets/images";
import { getContentRoutes } from "../../routes/contentRoutes";
import ContentRoute from "../../routes/models/contentRoute";
import { isScreenMobileOrSmall, isScreenTabletOrSmaller } from "../../utils/utility";
import { UIIconMenuList } from "../uiIconMenu/uiIconMenu";

interface UIDrawerProps {
    /**
     * Email of the user
     */
    email: string;
    /**
     * Username of the user
     */
    username: string;
    /**
     * Signout button click handler
     */
    onSignout: () => void;
    /**
     * Check if the route is active
     *
     * @param route - Route to check if it is active
     * @returns boolean - True if the route is active, false otherwise
     */
    checkIfActiveRoute: (route: string) => boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

// TODO: list of icons and titles should be passed in as props, to decouple it.
export const UIDrawer: FunctionComponent<UIDrawerProps> = (
    props: UIDrawerProps): ReactElement => {

    const {
        email,
        username,
        onSignout,
        checkIfActiveRoute
    } = props;

    const [ isDrawerOpen, setDrawerOpen ] = useState<boolean>(true);
    const [ drawerVariant, setDrawerVariant ] = useState<UIDrawerVariant>("permanent");
    const [ isLogoutDialogOpen, setLogoutDialogOpen ] = useState<boolean>(false);

    const anchorRef = useRef<HTMLButtonElement>(null);

    /**
     * Handle the opening of the drawer on mobile devices
     */
    const handleDrawerOpenMobile = (): void => {
        setDrawerOpen(true);
        setDrawerVariant("temporary");
    };

    /**
     * Handle the closing of the drawer on mobile devices
     */
    const handleDrawerCloseMobile = (): void => {
        setDrawerOpen(false);
        setDrawerVariant("temporary");
    };

    /**
     * Check if the drawer is open and if it is in permanent mode.
     */
    const checkIfDrawerIsOpen = (): boolean =>
        isDrawerOpen || drawerVariant === "permanent";

    /**
     * Handle om ui drawer user details click, to open the logout dialog
     */
    const onUIDrawerUserDetailsClick = () => {
        setLogoutDialogOpen(!isLogoutDialogOpen);
    };

    useEffect(() => {
        // Function to check and update drawer state based on screen width
        const checkDrawerState = () => {
            if (isScreenMobileOrSmall()) {
                handleDrawerCloseMobile();
            } else {
                setDrawerOpen(!isScreenTabletOrSmaller());
                setDrawerVariant("permanent");
            }
        };

        // Check initial screen size
        checkDrawerState();

        // TODO: REMOVE
        onSignout();

        // Add event listener for window resize
        window.addEventListener("resize", checkDrawerState);

        // Cleanup the event listener
        return () => window.removeEventListener("resize", checkDrawerState);
    }, []);

    // Render the drawer logo
    const DrawerLogo = () => (
        <img
            className={ styles["uiDrawerLogo"] }
            src={ isDrawerOpen ? images.logoPrimary : images.logoPrimarySmall }
        />
    );

    return (
        !checkIfDrawerIsOpen()
            ? (
                <IconButton className={ styles["uiDrawerOpenButton"] } onClick={ handleDrawerOpenMobile }>
                    <Menu02Icon />
                </IconButton>
            ) : (
                <MuiDrawer
                    className={ styles["uiDrawer"] }
                    open={ isDrawerOpen }
                    variant={ drawerVariant }
                    anchor="left"
                >
                    <DrawerHeader className={ styles["uiDrawerLogoContainer"] }>
                        <Stack
                            direction="row"
                            alignItems="baseline"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <DrawerLogo />
                            <IconButton
                                className={ styles["uiDrawerCloseButton"] }
                                onClick={ handleDrawerCloseMobile }
                            >
                                <Cancel01Icon />
                            </IconButton>
                        </Stack>
                    </DrawerHeader>
                    <Stack className={ styles["uiDrawerStack"] } justifyContent="space-between">
                        <List className={ styles["uiDrawerList"] }>
                            { getContentRoutes().map((contentRoute: ContentRoute) => (
                                <NavLink key={ contentRoute.id } to={ contentRoute.path }>
                                    <ListItem
                                        className={ styles["uiDrawerListItem"] }
                                        disablePadding
                                    >
                                        <ListItemButton
                                            selected={ checkIfActiveRoute(contentRoute.path) }
                                            classes={ {
                                                root: styles["uiDrawerListItemButton"],
                                                selected: styles["uiDrawerListItemButtonSelected"]
                                            } }
                                            onClick={ isScreenMobileOrSmall() ? handleDrawerCloseMobile : undefined }
                                        >
                                            <ListItemIcon className={ styles["uiDrawerListItemIcon"] } >
                                                { contentRoute.drawerIcon }
                                            </ListItemIcon>
                                            <ListItemText
                                                className={ styles["uiDrawerListItemText"] }
                                                primary={ (
                                                    <Typography variant="body2">
                                                        { contentRoute.drawerLabel }
                                                    </Typography>
                                                ) }
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            )) }
                        </List>
                        <Stack>
                            <UIIconMenuList
                                open={ isLogoutDialogOpen }
                                anchorElement={ anchorRef }
                                iconMenuList={ getUIDrawerUserDetails() }
                            />
                            <Button
                                className={ `${
                                    isLogoutDialogOpen
                                        ? styles["uiDrawerUserDetailsSelected"]
                                        : styles["uiDrawerUserDetails"]
                                }` }
                                variant="text"
                                onClick={ onUIDrawerUserDetailsClick }
                                ref = { anchorRef }
                            >
                                <Stack
                                    className={ styles["uiDrawerUserDetailsContainer"] }
                                    direction="row"
                                    alignItems="center"
                                    spacing={ 2 }
                                >
                                    <Avatar className={ styles["uiDrawerUserDetailsAvatar"] } sizes="small" />
                                    <Stack
                                        className={ styles["uiDrawerUserDetailsTextContainer"] }
                                        alignItems="flex-start"
                                    >
                                        <Typography variant="body2" className={ styles["uiDrawerUsername"] }>
                                            { username }
                                        </Typography>
                                        <Typography variant="subtitle2" className={ styles["uiDrawerEmail"] } >
                                            { email }
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Button>
                        </Stack>
                    </Stack>
                </MuiDrawer>
            )
    );
};
