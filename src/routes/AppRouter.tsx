import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";
import ReservationPage from "../pages/ReservationPage";
import TestimonialPage from "../pages/TestimonialPage";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element:<HomePage/>
            },
            {
                path: "about",
                element:<AboutPage/>
            },
            {
                path: "service",
                element:<ServicePage/>
            },
            {
                path: "Menu",
                element:<MenuPage/>
            },
            {
                path: "contact",
                element:<ContactPage/>
            },
            {
                path: "reservation",
                element:<ReservationPage/>
            },
            {
                path: "testimonial",
                element:<TestimonialPage/>
            },
            {
                path: "*",
                element:<NotFound/>
            },
        ]
    }
])

export default routers;
