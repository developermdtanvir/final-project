import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../layout/Main";
import { Appoinment } from "../Appoinment/Appoinment";
import { Home } from "../Home/Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/appoinment',
                element: <Appoinment />
            }
        ]
    }
])