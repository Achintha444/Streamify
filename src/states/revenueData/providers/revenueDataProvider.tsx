import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import revenueAnalyticsDataJson from "../../../assets/data/revenueAnalytics.json";
import revenueDataJson from "../../../assets/data/revenueData.json";
import revenueDistributionDataJson from "../../../assets/data/revenueDistribution.json";
import RevenueDataContext from "../contexts/revenueDataContext";
import { RevenueAnalyticsData } from "../models/revenueAnalyticsData";
import { RevenueData } from "../models/revenueData";
import { RevenueDistribution } from "../models/revenueSource";

/**
 * Props interface for the [RevenueDataProvider]
 */
export type RevenueDataProviderProps = PropsWithChildren;

/**
 * React context provider for the revenue data.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const RevenueDataProvider: FunctionComponent<RevenueDataProviderProps> = (
    props: RevenueDataProviderProps
): ReactElement => {
    const { children } = props;

    const [ isRevenueDataError, setIsRevenueDataError ] = useState<boolean>(false);
    const [ revenueData, setRevenueData ] = useState<RevenueData | null>(null);
    const [ isRevenueAnalyticsDataError, setIsRevenueAnalyticsDataError ] = useState<boolean>(false);
    const [ revenueAnalyticsData, setRevenueAnalyticsData ] = useState<RevenueAnalyticsData | null>(null);
    const [ isRevenueDistributionDataError, setIsRevenueDistributionDataError ] = useState<boolean>(false);
    const [ revenueDistributionData, setRevenueDistributionData ] = useState<RevenueDistribution | null>(null);

    // Load the revenue data
    useMemo(() => {
        try {
            if (revenueDataJson) {
                setRevenueData(revenueDataJson);
                setIsRevenueDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsRevenueDataError(true);
        }
    }, [ revenueDataJson ]);

    // Load the revenue analytics data
    useMemo(() => {
        try {
            if (revenueAnalyticsDataJson) {
                setRevenueAnalyticsData(revenueAnalyticsDataJson);
                setIsRevenueAnalyticsDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsRevenueAnalyticsDataError(true);
        }
    }, [ revenueAnalyticsDataJson ]);

    // Load the revenue distribution data
    useMemo(() => {
        try {
            if (revenueDistributionDataJson) {
                setRevenueDistributionData(revenueDistributionDataJson.revenueDistribution);
                setIsRevenueDistributionDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsRevenueDistributionDataError(true);
        }
    }, [ revenueDistributionDataJson ]);

    return (
        <RevenueDataContext.Provider
            value={ {
                isRevenueAnalyticsDataError: isRevenueAnalyticsDataError,
                isRevenueDataError: isRevenueDataError,
                isRevenueDistributionDataError: isRevenueDistributionDataError,
                revenueAnalyticsData: revenueAnalyticsData,
                revenueData: revenueData,
                revenueDistributionData: revenueDistributionData
            } }
        >
            { children }
        </RevenueDataContext.Provider>
    );
};

export default RevenueDataProvider;
