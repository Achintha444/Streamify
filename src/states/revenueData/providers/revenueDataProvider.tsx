import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import revenueDataJson from "../../../assets/data/revenueData.json";
import RevenueDataContext from "../contexts/revenueDataContext";
import { RevenueAnalyticsData } from "../models/revenueAnalyticsData";
import { RevenueData } from "../models/revenueData";

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
    const [ RevenueData, setRevenueData ] = useState<RevenueData | null>(null);
    const [ isRevenueAnalyticsDataError, setIsRevenueAnalyticsDataError ] = useState<boolean>(false);
    const [ revenueAnalyticsData, setRevenueAnalyticsData ] = useState<RevenueAnalyticsData | null>(null);

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
            if (revenueAnalyticsData) {
                setRevenueAnalyticsData(revenueAnalyticsData);
                setIsRevenueAnalyticsDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsRevenueAnalyticsDataError(true);
        }
    }, [ revenueAnalyticsData ]);

    return (
        <RevenueDataContext.Provider
            value={ {
                isRevenueAnalyticsDataError: isRevenueAnalyticsDataError,
                isRevenueDataError: isRevenueDataError,
                revenueAnalyticsData: revenueAnalyticsData,
                revenueData: RevenueData
            } }
        >
            { children }
        </RevenueDataContext.Provider>
    );
};

export default RevenueDataProvider;
