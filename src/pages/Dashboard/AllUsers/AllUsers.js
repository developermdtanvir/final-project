import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Speainer } from '../../shared/Speainer/Speainer';

export const AllUsers = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users').then(res => res.json())
    });
    const handleMakeAdmin = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authrizetion: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch()
                }
            }).catch(error => {
                toast.error('This Section only use Admin')
            })
    }
    console.log(data);
    if (isLoading) {
        return <Speainer />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((users, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users?.role !== 'admin' && <button onClick={() => handleMakeAdmin(users._id)} className=' btn btn-primary btn-xs text-white font-bold'>MAKE ADMIN</button>}</td>
                            <td><button className=' btn btn-xs text-white font-bold'>DELETE</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
