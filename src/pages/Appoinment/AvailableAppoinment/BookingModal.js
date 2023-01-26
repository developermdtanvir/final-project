import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';

export const BookingModal = ({ appoinment, modalInfo, selectedDate }) => {
    const { register, handleSubmit } = useForm();

    const { name, slots } = modalInfo;
    const onSubmit = data => {
        const { fullname, number, slots, date, email } = data;
        const boking = {
            pataint: fullname,
            tretment: name,
            number,
            slots,
            selected: date,
            email,
        }
        console.log(boking)
    };


    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none

    `
    return (
        <>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* My Custom  */}

                    <form className='form-group space-y-10' onSubmit={handleSubmit(onSubmit)}>
                        <h1>{name}</h1>
                        <div>
                            <input required placeholder='Full Name' className={InputClass} type='text'{...register("date")} value={format(selectedDate, 'PP')} />
                        </div>
                        <div>
                            <select {...register("slots")} className={InputClass}>
                                {
                                    slots && slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <input required placeholder='Full Name' className={InputClass} type='text' {...register("fullname")} />
                        </div>
                        <div>
                            <input required placeholder='PhoneNumber' className={InputClass} type='number' {...register("number")} />
                        </div>
                        <div>
                            <input required placeholder='Email' className={InputClass} type='email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </div>
                        <input className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
        </>

    )
}
