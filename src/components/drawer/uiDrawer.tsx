
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { Cancel01Icon, Home01Icon, Menu02Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import { UIDrawerVariant } from "./models/uidrawerVariant";
import styles from "./UIDrawer.module.css";
import { images } from "../../assets/images";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../utils/constants/constants";

const DrawerHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

export default function UIDrawer() {
    const [ isDrawerOpen, setDrawerOpen ] = useState<boolean>(true);
    const [ drawerVariant, setDrawerVariant ] = useState<UIDrawerVariant>("permanent");

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

    useEffect(() => {
        // Function to check and update drawer state based on screen width
        const checkDrawerState = () => {
            const isMobileOrSmaller = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
            const isTabletOrSmaller = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches;

            if (isMobileOrSmaller) {
                handleDrawerCloseMobile();
            } else {
                setDrawerOpen(!isTabletOrSmaller);
                setDrawerVariant("permanent");
            }
        };

        // Check initial screen size
        checkDrawerState();

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
                            { [ "Overview", "Users", "Artists", "Songs", "Revenue" ].map((text) => (
                                <ListItem
                                    className={ styles["uiDrawerListItem"] }
                                    key={ text }
                                    disablePadding
                                >
                                    <ListItemButton className={ styles["uiDrawerListItemButton"] } >
                                        <ListItemIcon className={ styles["uiDrawerListItemIcon"] } >
                                            <Home01Icon />
                                        </ListItemIcon>
                                        <ListItemText
                                            className={ styles["uiDrawerListItemText"] }
                                            primary={
                                                <Typography variant="body2">{ text }</Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )) }
                        </List>
                        <Button className={ styles["uiDrawerUserDetails"] } variant="text">
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
                                        Username
                                    </Typography>
                                    <Typography variant="subtitle2" className={ styles["uiDrawerEmail"] }>
                                        Email
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Button>
                    </Stack>
                </MuiDrawer>
            )
    );
}
