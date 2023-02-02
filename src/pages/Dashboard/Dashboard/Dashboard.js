import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import { Speainer } from '../../shared/Speainer/Speainer';
import { DashboardTable } from './DashboardTable';

export const Dashboard = () => {
    const { user } = useContext(AuthProvider);
    const { data = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: () => axios.get(`http://localhost:5000/booking?email=${user?.email}`, {
            headers: {
                authrizetion: `bearer ${localStorage.getItem('token')}`
            }
        })
    });
    console.log(data);
    if (isLoading) {
        return <Speainer />
    }
    return (
        <div className=' bg-[#F1F5F9] rounded-md'>
            <div className=' mt-20 p-20'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Sevice</th>
                                <th>Time</th>
                                <th>Pirce</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            data?.data.map((info, index) => <DashboardTable key={info._id} index={index} name={user?.displayName} info={info} />)
                        }
                    </table>
                </div>
            </div>

        </div>
    )
}
