import { useContext } from "react";
import RevenueDataContext, { RevenueDataContextProps } from "../contexts/revenueDataContext";

/**
 * Interface for the return type of the `useRevenueData` hook.
 */
export type UseRevenueDataInterface = RevenueDataContextProps;

/**
 * Hook that provides access to the information about the Revenue data.
 * @returns An object containing the Revenue related data.
 */
const useRevenueData = (): UseRevenueDataInterface => {
    const context: RevenueDataContextProps | null = useContext(RevenueDataContext);

    if (!context) {
        throw new Error("useRevenueData must be used within a RevenueDataProvider");
    }

    return context;
};

export default useRevenueData;
