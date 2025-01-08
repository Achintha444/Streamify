import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import usersDataJson from "../../../assets/data/userData.json";
import UsersDataContext from "../contexts/usersDataContext";
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

    return (
        <UsersDataContext.Provider
            value={ {
                isUsersDataError: isUsersDataError,
                usersData: usersData
            } }
        >
            { children }
        </UsersDataContext.Provider>
    );
};

export default UsersDataProvider;
