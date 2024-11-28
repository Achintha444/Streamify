import { Avatar, Button, Stack, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { Home01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import { images } from "../../../assets/images";
import styles from "../../../components/drawer/Drawer.module.css";
import Layout from "../../../components/layout/Layout";
import { TABLET_BREAKPOINT } from "../../../utils/constants/constants";

const DrawerHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

export default function OverviewPage() {

    const [ isDrawerOpen, setDrawerOpen ] = useState(true);

    useEffect(() => {
        // Function to check and update drawer state based on screen width
        const checkDrawerState = () => {
            const isTabletOrSmaller = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches;

            setDrawerOpen(!isTabletOrSmaller);
        };

        // Check initial screen size
        checkDrawerState();

        // Add event listener for window resize
        window.addEventListener("resize", checkDrawerState);

        // Cleanup the event listener
        return () => window.removeEventListener("resize", checkDrawerState);
    }, []);

    const DrawerLogo = () => (
        <img
            className={ styles["uiDrawerLogo"] }
            src={ isDrawerOpen ? images.logoPrimary : images.logoPrimarySmall }
        />
    );

    return (
        <Layout>
            <MuiDrawer open={ isDrawerOpen } variant="permanent" >
                <DrawerHeader className={ styles["uiDrawerLogoContainer"] }>
                    <DrawerLogo />
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
                            <Avatar className={ styles["uiDrawerUserDetailsAvatar"] } sizes="small"/>
                            <Stack className={ styles["uiDrawerUserDetailsTextContainer"] } alignItems="flex-start">
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
        </Layout>
    );
}
