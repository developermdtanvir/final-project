import React from 'react';

export const ConfirmationModal = ({ closeModal, title, message, handleDoctorDelete, data, successButton }) => {
    console.log(data);
    return (
        <div>

            <input type="checkbox" id="confirmation_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleDoctorDelete(data)} htmlFor="confirmation_modal" className="btn btn-primary">{successButton}</label>
                        <label onClick={closeModal} htmlFor="confirmation_modal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div></div>
    )
}
