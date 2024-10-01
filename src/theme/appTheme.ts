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
            fontFamily: "Open Sans"
        },
        button: {
            fontFamily: "Open Sans",
            color: "#FDFDFF",
            backgroundColor: "#4B6D9B"
        },
        subtitle1: {
            fontFamily: "Open Sans"
        },
        subtitle2: {
            fontFamily: "Open Sans"
        },
        h4: {
            fontFamily: "Pacifico"
        },
        caption: {
            fontFamily: "Open Sans"
        }
    }
}));
