import BillboardDataProvider from "../../../states/billboardData/providers/billboardDataProvider";
import ArtistsLayout from "../layout/artistsLayout";

export default function ArtistsPage() {
    return (
        <BillboardDataProvider>
            <ArtistsLayout />
        </BillboardDataProvider>
    );
}
