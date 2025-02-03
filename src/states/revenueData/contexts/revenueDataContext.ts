import { Context, createContext } from "react";
import { RevenueAnalyticsData } from "../models/revenueAnalyticsData";
import { RevenueData } from "../models/revenueData";
import { RevenueDistribution } from "../models/revenueSource";

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
    /**
     * Revenue analytics data.
     */
    revenueAnalyticsData: RevenueAnalyticsData | null;
    /**
     * Flag indicating if an error occurred while loading the revenue analytics data.
     */
    isRevenueAnalyticsDataError: boolean;
    /**
     * Revenue distribution data.
     */
    revenueDistributionData: RevenueDistribution | null;
    /**
     * Flag indicating if an error occurred while loading the revenue distribution data.
     */
    isRevenueDistributionDataError: boolean;
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
