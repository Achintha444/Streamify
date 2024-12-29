import { useContext } from "react";
import BillboardDataContext, { BillboardDataContextProps } from "../contexts/billboardDataContext";

/**
 * Interface for the return type of the `useBillboardData` hook.
 */
export type UseBillboardDataInterface = BillboardDataContextProps;

/**
 * Hook that provides access to the information about the routes in the application.
 * @returns An object containing the billboard related data.
 */
const useBillboardData = (): UseBillboardDataInterface => {
    const context: BillboardDataContextProps | null = useContext(BillboardDataContext);

    if (!context) {
        throw new Error("useBillboardData must be used within a BillboardDataProvider");
    }

    return context;
};

export default useBillboardData;
