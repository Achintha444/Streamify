/* eslint-disable sort-keys */

import { RouteObject, createBrowserRouter } from "react-router";
import { getContentRoutes } from "./contentRoutes";
import ContentRoute from "./models/contentRoute";
import App from "../pages/app/pages/App";
import LoginPage from "../pages/login/pages/loginPage";

export const getRouter = createBrowserRouter([
    {
        path: "/",
        id: "root",
        element: <LoginPage />
    },
    {
        path: "/app",
        element: <App />,
        children: getContentRoutes().map((route: ContentRoute): RouteObject => {
            return {
                path: route.path,
                id: route.id,
                element: route.component
            };
        })
    }
]);
