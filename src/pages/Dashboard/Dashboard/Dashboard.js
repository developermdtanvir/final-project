import React from 'react'
import { Header } from '../../shared/Header/Header'
import { DashboardTable } from './DashboardTable'

export const Dashboard = () => {
    return (
        <div className=' bg-[#F1F5F9]'>
            <Header />
            <DashboardTable />
        </div>
    )
}
