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
            path: "/app/overview",
            id: "overview",
            drawerLabel: "Overview",
            pageTitle: "Overview",
            pageSubTitle: "Key Metrics, and Insights at a Glance",
            drawerIcon: <SearchList01Icon />,
            component: <OverviewPage />
        },
        {
            path: "/app/users",
            id: "users",
            drawerLabel: "Users",
            pageTitle: "Users",
            pageSubTitle: "Key Metrics of Users Growth and Engagement",
            drawerIcon: <UserGroupIcon />,
            component: <UsersPage />
        },
        {
            path: "/app/artists",
            id: "artists",
            drawerLabel: "Artists",
            pageTitle: "Artists",
            pageSubTitle: "Key Metrics of Insights into Artists Performances",
            drawerIcon: <Mic01Icon />,
            component: <ArtistsPage />
        },
        {
            path: "/app/songs",
            id: "songs",
            drawerLabel: "Songs",
            pageTitle: "Songs",
            pageSubTitle: "Key Metrics of Insights into Songs Performances",
            drawerIcon: <MusicNote03Icon />,
            component: <SongsPage />
        },
        {
            path: "/app/revenue",
            id: "revenue",
            drawerLabel: "Revenue",
            pageTitle: "Revenue",
            pageSubTitle: "Key Metrics of Earnings",
            drawerIcon: <CoinsDollarIcon />,
            component: <RevenuePage />
        }
    ];
};
