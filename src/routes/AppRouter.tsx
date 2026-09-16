import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>

    }
])

export default routers;
