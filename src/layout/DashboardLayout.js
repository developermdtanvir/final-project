import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthProvider } from '../Context/AuthContext/AuthContext'
import { Header } from '../pages/shared/Header/Header'
export const DashboardLayout = () => {
    const { user } = useContext(AuthProvider);

    const email = user?.email
    const [isAdmin, setIsAdmin] = useState(false)
    if (email) {
        fetch(`https://doctors-portal-server-liart-eight.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
            })
    }
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="my_deshboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my_deshboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-auto  text-base-content">
                        <li><Link to='/deshboard'>My Appoinment</Link></li>

                        {/* Bellow two Routes use only admin  */}

                        {
                            isAdmin && <>

                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>


                            </>
                        }

                    </ul>
                </div>
            </div>
        </div >
    )
}
