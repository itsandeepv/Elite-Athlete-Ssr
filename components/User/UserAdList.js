import React, { useState } from 'react'
import AddAddress from '../Modal/AddAddress'

function UserAdList() {
    const [showpopup, setshowPopup] = useState(false)

    return (
        <div className='section-details p-1'>
            <div className='border-bottom pb-3 d-flex align-items-center justify-content-between '>
                <h4>Saved Address</h4>
                <button className='c-btn bg-voilet text-light' onClick={() => { setshowPopup(true) }}>Add New Address</button>
            </div>
            <div className='row p-2'>
                <div className='dashboard-address-list p-lg-3'>
                    <h6 className='text-dark'><b>DEFAULT ADDRESS</b></h6>
                    <div className='address-container'>
                        <div className='py-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <b> Mark jack </b>
                                <p className=' bg-voilet text-light py-1 px-2 bold-600'>Home</p>
                            </div>
                            <p className=' my-2 text-dark bold-600'>
                                Harsh villa Near <br/>
                                HDFC Bank Old DLF Sector 14,
                                Gurugram.
                            </p>
                            <div className='w-100'>
                                <div className=' '>
                                    <p>
                                        Mobile : <b>+91 6969696969</b>
                                    </p>
                                    <div className='d-flex  align-items-center gap-3 pt-3'>
                                        <button className='c-btn bg-dark text-light' onClick={() => { setshowPopup(true) }}>Edit</button>
                                        <button className='c-btn bg-voilet text-light'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                </div>
                <div className='dashboard-address-list p-lg-3 mt-3'>
                    <h6 className='text-dark'><b>Others Address</b></h6>
                    <div className='address-container'>
                        <div className='py-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <b> Mark jack </b>
                                <p className=' bg-voilet text-light py-1 px-2 bold-600'>Office</p>
                            </div>
                            <p className=' my-2 text-dark bold-600'>
                                Harsh villa Near <br/>
                                HDFC Bank Old DLF Sector 14,
                                Gurugram.
                            </p>
                            <div className='w-100'>
                                <div className=' '>
                                    <p>
                                        Mobile : <b>+91 6969696969</b>
                                    </p>
                                    <div className='d-lg-flex justify-content-between align-items-center pt-3'>
                                    <div className='d-flex  align-items-center gap-3 '>
                                        <button className='c-btn bg-dark text-light' onClick={() => { setshowPopup(true) }}>Edit</button>
                                        <button className='c-btn bg-voilet text-light'>Delete</button>
                                    </div>
                                    <div className='d-flex  align-items-center gap-2'>
                                        <input type='checkbox' />
                                        <p>Make this default address</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showpopup && <AddAddress setshowPopup={setshowPopup}/> }       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdList