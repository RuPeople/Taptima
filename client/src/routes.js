import {
    ADMIN_ROUTE,
    AUTH_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, CREATED_REQUEST,
    LOGIN_ROUTE,
    MAIN_ROUTE,
} from "./utils/consts";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import CreatedRequest from "./pages/CreatedRequest";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: CREATED_REQUEST,
        Component: CreatedRequest
    },
]