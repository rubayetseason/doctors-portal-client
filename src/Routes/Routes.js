import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])