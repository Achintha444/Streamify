import { Avatar, Stack, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { Home01Icon } from "hugeicons-react";
import * as React from "react";
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

const DrawerHeader: any = styled("div")(({ theme }) => ({
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
    const theme = useTheme();
    const [ open, setOpen ] = React.useState(true);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <Drawer open={ open }>
                <DrawerHeader>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === "rtl" ? "asd" : "xx" }
                    </IconButton>
                </DrawerHeader>
                <Stack className={ styles["uiDrawerStack"] } justifyContent="space-between">
                    <List className={ styles["uiDrawerList"] }>
                        { [ "Overview", "Users", "Artists", "Songs", "Revenue" ].map((text) => (
                            <ListItem className={ styles["uiDrawerListItem"] } key={ text } disablePadding sx={ { display: "block" } }>
                                <ListItemButton
                                    className={ styles["uiDrawerListItemButton"] }
                                >

                                    <ListItemIcon
                                        className={ styles["uiDrawerListItemIcon"] }
                                        sx={ [
                                            {
                                                minWidth: 0,
                                                justifyContent: "center"
                                            },
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
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <Avatar />
                        <Stack>
                            <Typography variant="body2">Username</Typography>
                            <Typography>Role</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Drawer>
        </Layout>
    );
}
