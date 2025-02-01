import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import usersDataJson from "../../../assets/data/userData.json";
import userAnalyticsJson from "../../../assets/data/usersAnalytics.json";
import UsersDataContext from "../contexts/usersDataContext";
import { UserAnalyticsData } from "../models/userAnalyticsData";
import { UsersData } from "../models/UsersData";

/**
 * Props interface for the [UsersDataProvider]
 */
export type UsersDataProviderProps = PropsWithChildren;

/**
 * React context provider for the users data.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const UsersDataProvider: FunctionComponent<UsersDataProviderProps> = (
    props: UsersDataProviderProps
): ReactElement => {
    const { children } = props;

    const [ isUsersDataError, setIsUsersDataError ] = useState<boolean>(false);
    const [ usersData, setUsersData ] = useState<UsersData | null>(null);
    const [ isUserAnalyticsDataError, setIsUserAnalyticsDataError ] = useState<boolean>(false);
    const [ userAnalyticsData, setUserAnalyticsData ] = useState<UserAnalyticsData | null>(null);

    // Load the user data
    useMemo(() => {
        try {
            if (usersDataJson) {
                setUsersData(usersDataJson);
                setIsUsersDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsUsersDataError(true);
        }
    }, [ usersDataJson ]);

    // Load the user analytics data
    useMemo(() => {
        try {
            if (userAnalyticsJson) {
                setUserAnalyticsData(userAnalyticsJson);
                setIsUserAnalyticsDataError(false);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setIsUserAnalyticsDataError(true);
        }
    }, [ userAnalyticsJson ]);

    return (
        <UsersDataContext.Provider
            value={ {
                isUserAnalyticsDataError: isUserAnalyticsDataError,
                isUsersDataError: isUsersDataError,
                userAnalyticsData: userAnalyticsData,
                usersData: usersData
            } }
        >
            { children }
        </UsersDataContext.Provider>
    );
};

export default UsersDataProvider;
