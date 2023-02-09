import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../../../layout/DashboardLayout";
import { Main } from '../../../layout/Main';
import { Appoinment } from '../../Appoinment/Appoinment';
import { AllUsers } from "../../Dashboard/AllUsers/AllUsers";
import { AddDoctor } from "../../Dashboard/Dashboard/AddDoctor/AddDoctor";
import { Dashboard } from '../../Dashboard/Dashboard/Dashboard';
import { ManageDoctors } from "../../Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import { Payment } from "../../Dashboard/Dashboard/Payment/Payment";
import { Home } from '../../Home/Home/Home';
import { Login } from '../../Login/Login';
import { Register } from '../../Register/Register';
import { DisplayError } from "../../shared/DisplayError/DisplayError";
import { AdminRoute } from "../PraivetRoute/AdminRoute";
import { PraivetRoute } from "../PraivetRoute/PraivetRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError></DisplayError>,
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
        element: <PraivetRoute> <DashboardLayout /> </PraivetRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <ManageDoctors />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-liart-eight.vercel.app/booking/${params.id}`)
            }
        ]
    }
])