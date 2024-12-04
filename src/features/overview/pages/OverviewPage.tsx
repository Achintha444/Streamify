import Layout from "../../../layouts/layout";
import { MainContentLayout } from "../../../layouts/mainContentLayout";

export default function OverviewPage() {
    return (
        <Layout>
            <MainContentLayout content={ <div>Overview</div> } title="Overview" subTitle="Overview"/>
        </Layout>
    );
}
