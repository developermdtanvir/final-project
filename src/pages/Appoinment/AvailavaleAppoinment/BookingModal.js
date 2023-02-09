import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

export const BookingModal = ({ tretment, selectedDate, setTretment, refetch }) => {
    const { name, slots, price } = tretment;
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthProvider)
    const onSubmit = data => {
        const { date, email, fullName, number, slots } = data;
        const booking = {
            date,
            email,
            fullName,
            number,
            slots,
            tretment: name,
            price
        }
        fetch('https://doctors-portal-server-liart-eight.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Sucessfully');
                    setTretment(null);
                    refetch()
                }
                else {
                    toast.error(` ${data.message}`)
                }
                console.log(data)
            });


        console.log(booking)
    };
    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none

    `
    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='form-group space-y-10' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input required className={InputClass} value={format(selectedDate, 'PP')} type='text' {...register("date")} readOnly />
                        </div>
                        <select className={InputClass} {...register('slots')}>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <div>
                            <input required placeholder='Full Name' className={InputClass} defaultValue={user?.displayName} type='text' {...register("fullName")} disabled />
                        </div>
                        <div>
                            <input required placeholder='PhoneNumber' className={InputClass} type='number' {...register("number")} />
                        </div>
                        <div>
                            <input required placeholder='Email' className={InputClass} type='text' defaultValue={user?.email} {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </div>
                        <input className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer' value='submit' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
