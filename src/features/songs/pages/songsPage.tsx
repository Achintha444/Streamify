import BillboardDataProvider from "../../../states/billboardData/providers/billboardDataProvider";
import SongsLayout from "../layout/songsLayout";

export default function SongsPage() {
    return (
        <BillboardDataProvider>
            <SongsLayout />
        </BillboardDataProvider>
    );
}
