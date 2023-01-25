import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/shared/Footer/Footer'
import { Header } from '../pages/shared/Header/Header'

export const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
