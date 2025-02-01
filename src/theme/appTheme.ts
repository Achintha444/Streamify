/* eslint-disable sort-keys */
import { CSSObject, Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeColors } from "./themeColors";
import { ThemeFonts } from "./themeFonts";
import { images } from "../assets/images";

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
    breakpoints: {
        values: {
            xs: 0,
            sm: 468,
            md: 768,
            lg: 1200,
            xl: 1536
        }
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(4px)",
                    background: ThemeColors.colorWhiteTernary,
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
                        color: ThemeColors.colorWhitePrimary
                    }
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        borderColor: ThemeColors.colorPrimary
                    }
                }
            ]
        },
        MuiCard: {
            defaultProps: {
                variant: "outlined"
            },
            styleOverrides: {
                root: {
                    borderRadius: "16px",
                    borderColor: ThemeColors.colorWhiteTernaryForCard,
                    backdropFilter: "blur(24px)",
                    boxShadow: "0px 12px 12px 4px rgba(75, 109, 155, 0.04)",
                    background: ThemeColors.colorWhiteSecondaryForCard
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "16px !important"
                }
            }
        },
        MuiDrawer: {
            defaultProps: {
                variant: "permanent"
            },
            styleOverrides: {
                docked: {
                    height: "100%",
                    minWidth: "104px",
                    width: "282px",
                    maxWidth: "282px"
                },
                paper: {
                    border: `1px solid ${ThemeColors.colorWhiteTernary}`,
                    borderRadius: "24px",
                    height: "94vh",
                    margin: "24px",
                    flexShrink: 0,
                    background: `url(${images.drawer})`,
                    backgroundSize: "cover",
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
                    color: ThemeColors.colorPrimary,
                    backgroundColor: ThemeColors.colorWhiteSecondary,
                    border: `1px solid ${ThemeColors.colorWhiteTernary}`,
                    borderRadius: "8px"
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: ThemeColors.colorTextPrimary
                }
            }
        }
    },
    palette: {
        primary: {
            main: ThemeColors.colorPrimary,
            contrastText: "#242424"
        },
        text: {
            primary: ThemeColors.colorTextPrimary,
            secondary: ThemeColors.colorTextSecondary
        },
        divider: ThemeColors.colorTextPrimary,
        background: {
            default: ThemeColors.colorWhitePrimary,
            paper: ThemeColors.colorWhitePrimary

        }
    },
    typography: {
        body1: {
            fontFamily: ThemeFonts.defaultFontFamily,
            color: ThemeColors.colorTextPrimary
        },
        body2: {
            fontFamily: ThemeFonts.defaultFontFamily,
            color: ThemeColors.colorTextSecondary
        },
        button: {
            fontFamily: ThemeFonts.defaultFontFamily
        },
        subtitle1: {
            fontFamily: ThemeFonts.defaultFontFamily,
            fontWeight: "500",
            fontSize: "14px",
            color: ThemeColors.colorTextSecondary
        },
        subtitle2: {
            fontFamily: ThemeFonts.defaultFontFamily,
            fontWeight: "400",
            fontSize: "12px",
            color: ThemeColors.colorTextSecondary
        },
        h3: {
            fontFamily: ThemeFonts.defaultFontFamily,
            color: ThemeColors.colorTextPrimary
        },
        h4: {
            fontFamily: ThemeFonts.secondaryFontFamily
        },
        h5: {
            fontFamily: ThemeFonts.defaultFontFamily,
            color: ThemeColors.colorPrimary,
            fontWeight: "bold"
        },
        h6: {
            fontFamily: ThemeFonts.defaultFontFamily,
            color: ThemeColors.colorPrimary,
            fontWeight: "semibold"
        },
        caption: {
            fontFamily: ThemeFonts.defaultFontFamily,
            fontSize: "12px",
            color: ThemeColors.colorTextSecondary
        }
    }
}));
