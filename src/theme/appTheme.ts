import { createTheme, CSSObject, responsiveFontSizes, Theme } from "@mui/material/styles";
import { images } from "../assets/images";

const Font = {
    defaultFontFamily: "Open Sans",
    secondaryFontFamily: "Pacifico"
};

const Colors = {
    colorPrimary: "#4B6D9B",
    colorTextPrimary: "#212933",
    colorTextSecondary: "#6F7A88",
    colorWhitePrimary: "#FDFDFF",
    colorWhiteSecondary: "#F6F8FF",
    colorWhiteTernary: "#C2D1FF",
    colorWhiteTernaryBackdrop: ""
};

const openedMixin = (theme: Theme): CSSObject => ({
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp
    })
});

const closedMixin = (theme: Theme): CSSObject => ({
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp
    }),
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

export const appTheme = responsiveFontSizes(createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(10px)",
                    background: Colors.colorWhiteTernary,
                    opacity: "0.4 !important",
                    width: "100% !important"
                }
            }
        },
        MuiButton: {
            defaultProps: {
                autoCapitalize: "none",
                disableElevation: true,
                variant: "contained"
            },
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "10px 20px",
                    textTransform: "none"
                }
            },
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        color: Colors.colorWhitePrimary
                    }
                }
            ]
        },
        MuiDrawer: {
            defaultProps: {
                variant: "permanent"
            },
            styleOverrides: {
                docked: {
                    height: "100%",
                    width: "255px"
                },
                paper: {
                    width: "255px",
                    border: `1px solid ${Colors.colorWhiteTernary}`,
                    borderRadius: "24px",
                    height: "94vh",
                    margin: "24px",
                    flexShrink: 0,
                    background: `url(${images.drawer})`,
                    boxSizing: "border-box"
                },
                root: ({ theme, ownerState }) => {
                    const open = ownerState.open;

                    return {
                        ...(open ? openedMixin(theme) : closedMixin(theme)),
                        "& .MuiDrawer-paper": open
                            ? openedMixin(theme)
                            : closedMixin(theme)
                    };
                }
            },
            variants: [
                {
                    props: { open: true },
                    style: {}
                },
                {
                    props: { open: false },
                    style: {}
                }
            ]
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: Colors.colorTextPrimary
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: Colors.colorTextPrimary
                }
            }
        }
    },
    palette: {
        primary: {
            main: Colors.colorPrimary,
            contrastText: "#242424"
        },
        text: {
            primary: Colors.colorTextPrimary,
            secondary: Colors.colorTextSecondary
        },
        divider: Colors.colorTextPrimary,
        background: {
            default: Colors.colorWhitePrimary,
            paper: Colors.colorWhitePrimary

        }
    },
    typography: {
        body1: {
            fontFamily: Font.defaultFontFamily,
            color: Colors.colorTextPrimary
        },
        body2: {
            fontFamily: Font.defaultFontFamily,
            color: Colors.colorTextSecondary
        },
        button: {
            fontFamily: Font.defaultFontFamily
        },
        subtitle1: {
            fontFamily: Font.defaultFontFamily,
            fontWeight: "500",
            fontSize: "14px"
        },
        subtitle2: {
            fontFamily: Font.defaultFontFamily,
            fontWeight: "400",
            fontSize: "12px",
            color: Colors.colorTextSecondary
        },
        h4: {
            fontFamily: Font.secondaryFontFamily
        },
        caption: {
            fontFamily: Font.defaultFontFamily,
            fontSize: "12px",
            color: Colors.colorTextSecondary
        }
    }
}));
