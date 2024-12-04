import Layout from "../../../layouts/layout";
import { MainContentLayout } from "../../../layouts/mainContentLayout";

export default function RevenuePage() {
    return (
        <Layout>
            <MainContentLayout content={ <div>Overview</div> } title="Overview" subTitle="Overview"/>
        </Layout>
    );
}
