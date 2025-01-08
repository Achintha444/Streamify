import { Context, createContext } from "react";
import { RevenueData } from "../models/revenueData";

/**
 * Props interface for RevenueDataContext.
 */
export interface RevenueDataContextProps {
    /**
     * Revenue data.
     */
    revenueData: RevenueData | null;
    /**
     * Flag indicating if an error occurred while loading the revenue data.
     */
    isRevenueDataError: boolean;
}

/**
 * Context object for managing the RevenueDataContext.
 */
const RevenueDataContext: Context<null | RevenueDataContextProps> = createContext<
    null | RevenueDataContextProps
>(
    null
);

/**
 * Display name for the RevenueDataContext.
 */
RevenueDataContext.displayName = "RevenueDataContext";

export default RevenueDataContext;
