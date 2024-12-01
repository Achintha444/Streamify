import Layout from "../../../components/layouts/layout";
import { MainContentLayout } from "../../../components/layouts/mainContentLayout";

export default function SongsPage() {
    return (
        <Layout>
            <MainContentLayout content={<div>Overview</div>} title="Overview" subTitle="Overview"/>
        </Layout>
    );
}
