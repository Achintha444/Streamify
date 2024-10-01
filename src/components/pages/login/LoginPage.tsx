import Grid from "@mui/material/Grid2";
import Layout from "../../common/Layout";
import { images } from "../../../theme/images";
import "./LoginPage.css";

function LoginPage() {
  return (
	<Layout>
		<Grid className="side-image-holder" size={{ xs: 0, sm: 0, md: 6 }}>
			<img src={ images.logoSide } />
		</Grid>
		<Grid size={6}>
		</Grid>
	</Layout>
  );
};

export default LoginPage;
