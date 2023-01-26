import React, { useState } from 'react';

export const AvailableOption = ({ option, appoinment }) => {
    const { name, slots, _id } = option
    const [modalInfo, setModalInfo] = useState({})
    console.log(modalInfo)

    const handlModalInfo = id => {
        const info = appoinment.find(option => option._id === id);
        setModalInfo(info);
    }
    return (
        <div className="card w-96 cursor-pointer shadow-xl hover:shadow-2xl duration-700">
            <div className="card-body text-center">
                <p className=' text-teal-500 font-semibold text-xl'>{name}</p>
                <p>{slots.length > 0 ? slots[0] : 'Not Service Avaiable Try Another Day'}</p>
                <p>{slots.length > 0 ? `Avaible ${slots.length > 1 ? 'Services' : 'Service'} ${slots.length}` : ''}</p>
                {/* The button to open modal */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <label onClick={() => handlModalInfo(_id)} htmlFor="booking_modal" className="btn">open modal</label>
            </div>
        </div>
    )
}
