import Grid from "@mui/material/Grid2";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container spacing={{ xs: 0, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }} height="98vh" width="98vw">
        { children }
    </Grid>
  );
}

export default Layout;
