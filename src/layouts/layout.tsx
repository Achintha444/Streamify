import Grid from "@mui/material/Grid2";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Grid container spacing={ {  md: 2, xs: 0 } } columns={ { md: 12, sm: 4, xs: 4 } } height="98vh" width="98vw">
            { children }
        </Grid>
    );
}

export default Layout;
