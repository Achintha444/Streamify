import { createTheme, responsiveFontSizes } from "@mui/material/styles";
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
    colorWhiteTernary: "#C2D1FF"
};

export const appTheme = responsiveFontSizes(createTheme({
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
            fontSize: "14px",
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
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                disableElevation: true,
                autoCapitalize: "none"
            },
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                    padding: "10px 20px"
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
                    height: "90vh",
                    margin: "24px",
                    flexShrink: 0,
                    background: `url(${images.drawer})`
                }
            }
        }
    }
}));
