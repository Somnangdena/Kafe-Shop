import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";

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
                path: "*",
                element:<NotFound/>
            },
        ]
    }
])

export default routers;
