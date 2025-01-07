import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";

// TODO: Create a local-data service to fetch the data
export default function OverviewPage() {
    return (
        <div>
            <SubSectionLayout
                title="Overview"
                displayItems={
                    [
                        <SubSectionCard
                            title="test"
                            content="Mariah Carey"
                            imageUrl="https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                        />, <SubSectionCard
                            title="test"
                            content="Mariah Carey"
                            imageUrl="https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                        />,
                        <SubSectionCard
                            title="test"
                            content="Mariah Carey"
                            imageUrl="https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                        />
                    ]
                }
            />
        </div>
    );
}
