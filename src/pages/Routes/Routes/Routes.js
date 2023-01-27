import { createBrowserRouter } from "react-router-dom";
import { Main } from '../../../layout/Main';
import { Appoinment } from '../../Appoinment/Appoinment';
import { Home } from '../../Home/Home/Home';
import { Login } from '../../Login/Login';
import { Register } from '../../Register/Register';
import { PraivetRoute } from "../PraivetRoute/PraivetRoute";
import { Dashboard } from './../../Dashboard/Dashboard/Dashboard';

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
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PraivetRoute> <Dashboard /> </PraivetRoute>
    }
])