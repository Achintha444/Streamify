import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const appTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#4B6D9B",
            contrastText: "#242424"
        },
        text: {
            primary: "#212933",
            secondary: "#6F7A88"
        },
        divider: "#212933",
        background: {
            default: "#FDFDFF",
            paper: "#FDFDFF"

        }
    },
    typography: {
        body1: {
            fontFamily: "Open Sans",
            color: "#212933"
        },
        button: {
            fontFamily: "Open Sans"
        },
        subtitle1: {
            fontFamily: "Open Sans",
            fontWeight: "500",
            fontSize: "14px"
        },
        subtitle2: {
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "14px",
            color: "#6F7A88"
        },
        h4: {
            fontFamily: "Pacifico"
        },
        caption: {
            fontFamily: "Open Sans",
            fontSize: "12px",
            color: "#6F7A88"
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
                        color: "#FDFDFF"
                    }
                }
            ]
        },
    }
}));
