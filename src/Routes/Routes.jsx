import { createBrowserRouter, Routes } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";
import PhonesDetails from "../Pages/PhonesDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home, 
                loader: () => fetch('phones.json'),
            },
            {
                path: '/favorites',
                Component: Favorites,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/phone-details',
                Component: PhonesDetails
            },
        ]
    },

])

export default router