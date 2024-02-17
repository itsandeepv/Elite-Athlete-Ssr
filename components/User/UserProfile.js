import React from 'react'

function UserProfile() {
    return (
        <div className='section-details p-1'>
            <div className='border-bottom pb-3 '>
                <h4>Edit Details</h4>
            </div>
            <div className=' mt-lg-3'>
                <div className='d-flex align-items-center justify-content-between border-v p-lg-3'>
                    <div className='col-lg-'>
                        <div className="form-contr">
                            <label htmlFor="name">Mobile Number*</label>
                            <input type="number" id='name' placeholder='Enter your Mobile Number' />
                        </div>
                    </div>
                    <button className='c-btn bg-light text-dark'>Change Number</button>
                </div>
            </div>
            <div className='row py-lg-2 mt-lg-3'>
                <div className='col-lg-6'>
                    <div className="form-contr">
                        <label htmlFor="number">Full Name*</label>
                        <input type="text" id='number' placeholder='Enter your Full Name' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-contr">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id='email' placeholder='Enter your email' />
                    </div>
                </div>
            </div>
            <div className='row py-lg-2 mt-lg-3'>
                <div className='col-lg-6'>
                    <div className="form-contr">
                        <label htmlFor="number">Date OF Birth*</label>
                        <input type="date" id='number' placeholder='Enter your Date OF Birth' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="form-contr">
                        <label htmlFor="email">Alternate Mobile Number</label>
                        <input type="text" id='email' placeholder='Enter your Alternate Mobile Number' />
                    </div>
                </div>
            </div>

            <div className='pt-3'>
                <button className='c-btn bg-voilet text-light'>Save Changes</button>
            </div>



        </div>
    )
}

export default UserProfile