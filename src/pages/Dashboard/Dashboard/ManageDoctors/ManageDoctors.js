import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { ConfirmationModal } from '../../../shared/ConfirmationModal/ConfirmationModal'
import { Speainer } from '../../../shared/Speainer/Speainer'

export const ManageDoctors = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => axios.get('http://localhost:5000/doctors', {
            headers: {
                authrizetion: `bearer ${localStorage.getItem('token')}`
            }
        })

    });
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    if (isLoading) {
        return <Speainer></Speainer>
    }
    const handleDoctorDelete = data => {
        axios.delete(`http://localhost:5000/doctors/${data._id}`, {
            headers: {
                authrizetion: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.error(`Doctors Deleted Succefully ${data.name}`)

                    refetch()
                }
            })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Specality</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data?.map((doctors, index) => <tr key={doctors._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={doctors.img} alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{doctors.name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {doctors.specify}
                            </td>
                            <td>
                                <label onClick={() => setDeletingDoctor(doctors)} htmlFor="confirmation_modal" className="btn btn-xs btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are You Sure Want To delete`}
                    message={`if You Delete ${deletingDoctor.name} It Cannot be`}
                    closeModal={closeModal}
                    handleDoctorDelete={handleDoctorDelete}
                    data={deletingDoctor}
                    successButton={`Delete`}
                >

                </ConfirmationModal>
            }
        </div>
    )
}
