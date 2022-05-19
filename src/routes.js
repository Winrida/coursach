import Lc from "./pages/LC";
import Main from "./pages/Main";
import Contacts from "./pages/contacts";
import News from "./pages/News";
import Auth from "./pages/Auth";
import Reviews from "./pages/Rew";
import {
    CONTACTS_ROUTE,
    LC_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    NEWS_ROUTE,
    REGISTRATION_ROUTE,
    REVIEWS_ROUTE
} from "./utils/consts";
import React from "@types/react";


export const authRoutes = [
    {
        path: LC_ROUTE,
        Component: <Lc/>
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: NEWS_ROUTE,
        Component: <News/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: REVIEWS_ROUTE,
        Component: <Reviews/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    }
]

