/* eslint-disable sort-keys */

import { CoinsDollarIcon, Mic01Icon, MusicNote03Icon, SearchList01Icon, UserGroupIcon } from "hugeicons-react";
import ContentRoute from "./models/contentRoute";
import ArtistsPage from "../features/artists/pages/artistsPage";
import OverviewPage from "../features/overview/pages/OverviewPage";
import RevenuePage from "../features/revenue/pages/revenuePage";
import SongsPage from "../features/songs/pages/songsPage";
import UsersPage from "../features/users/pages/usersPage";

export const getContentRoutes = (): ContentRoute[] => {
    return [
        {
            path: "/overview",
            id: "overview",
            drawerLabel: "Overview",
            drawerIcon: <SearchList01Icon />,
            component: <OverviewPage />
        },
        {
            path: "/users",
            id: "users",
            drawerLabel: "Users",
            drawerIcon: <UserGroupIcon />,
            component: <UsersPage />
        },
        {
            path: "/artists",
            id: "artists",
            drawerLabel: "Artists",
            drawerIcon: <Mic01Icon />,
            component: <ArtistsPage />
        },
        {
            path: "/songs",
            id: "songs",
            drawerLabel: "Songs",
            drawerIcon: <MusicNote03Icon />,
            component: <SongsPage />
        },
        {
            path: "/revenue",
            id: "revenue",
            drawerLabel: "Revenue",
            drawerIcon: <CoinsDollarIcon />,
            component: <RevenuePage />
        }
    ];
};
