import { Avatar, Button, Stack, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { Home01Icon } from "hugeicons-react";
import { images } from "../../../assets/images";
import styles from "../../../components/drawer/Drawer.module.css";
import Layout from "../../../components/layout/Layout";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
        width: drawerWidth,
        boxSizing: "border-box",
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    "& .MuiDrawer-paper": openedMixin(theme)
                }
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    "& .MuiDrawer-paper": closedMixin(theme)
                }
            }
        ]
    })
);

export default function OverviewPage() {
    return (
        <Layout>
            <Drawer open={ true }>
                <DrawerHeader className={ styles["uiDrawerLogoContainer"] }>
                    <img className={ styles["uiDrawerLogo"] } src={ images.logoPrimary } />
                </DrawerHeader>
                <Stack className={ styles["uiDrawerStack"] } justifyContent="space-between">
                    <List className={ styles["uiDrawerList"] }>
                        { [ "Overview", "Users", "Artists", "Songs", "Revenue" ].map((text) => (
                            <ListItem
                                className={ styles["uiDrawerListItem"] }
                                key={ text }
                                disablePadding
                                sx={ { display: "block" } }
                            >
                                <ListItemButton
                                    className={ styles["uiDrawerListItemButton"] }
                                >
                                    <ListItemIcon
                                        className={ styles["uiDrawerListItemIcon"] }
                                        sx={ [
                                            open
                                                ? {
                                                    mr: 3
                                                }
                                                : {
                                                    mr: "auto"
                                                }
                                        ] }
                                    >
                                        <Home01Icon />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={ styles["uiDrawerListItemText"] }
                                        primary={
                                            <Typography variant="body2">{ text }</Typography>
                                        }
                                        sx={ [
                                            open
                                                ? {
                                                    opacity: 1
                                                }
                                                : {
                                                    opacity: 0
                                                }
                                        ] }
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
                            justifyContent="flex-start"
                            spacing={ 2 }
                        >
                            <Avatar sizes="small"/>
                            <Stack alignItems="flex-start">
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
            </Drawer>
        </Layout>
    );
}
