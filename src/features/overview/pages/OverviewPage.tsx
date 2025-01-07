import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";

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
                        />, <SubSectionCard
                            title="test"
                            content="Mariah Carey"
                            imageUrl="https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                        />,
                        <SubSectionListCard
                            contentList={
                                [
                                    {
                                        number: "1",
                                        title: "Mariah Carey",
                                        imageUrl: "https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                                    },
                                    {
                                        number: "2",
                                        title: "Brenda Lee",
                                        imageUrl: "https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                                    },
                                    {
                                        number: "3",
                                        title: "Bobby Helms",
                                        imageUrl: "https://charts-static.billboard.com/img/1994/12/mariah-carey-x65-alliwantforchristmasisyou-7ve-180x180.jpg"
                                    }
                                ]
                            }
                        />
                    ]
                }
            />
        </div>
    );
}
