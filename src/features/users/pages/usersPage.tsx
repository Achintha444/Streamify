import UsersDataProvider from "../../../states/usersData/providers/usersDataProvider";
import UsersLayout from "../layout/usersLayout";

export default function UsersPage() {
    return (
        <UsersDataProvider>
            <UsersLayout />
        </UsersDataProvider>
    );
}
