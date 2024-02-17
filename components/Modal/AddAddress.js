import React from 'react'

function AddAddress({setshowPopup}) {
    return (
        <form className='login-details add-address'>
            <div className="login">
                <div className=" py-2 d-flex justify-content-between">
                    <h4 className='heading bold-600'>Add Address</h4>
                    {/* <hr/> */}
                    <span className='cursor-pointer' onClick={()=>{
                        if(setshowPopup){
                            setshowPopup(false)
                        }
                    }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38552 0.392699L7.99966 6.00684L13.5847 0.421788C13.7081 0.290477 13.8567 0.185433 14.0216 0.112955C14.1866 0.0404768 14.3645 0.00205708 14.5446 0C14.9304 0 15.3003 0.153235 15.5731 0.425996C15.8459 0.698756 15.9991 1.0687 15.9991 1.45444C16.0025 1.63276 15.9694 1.80989 15.9019 1.97496C15.8343 2.14003 15.7338 2.28956 15.6064 2.41437L9.94861 7.99943L15.6064 13.6572C15.8461 13.8917 15.9867 14.2093 15.9991 14.5444C15.9991 14.9302 15.8459 15.3001 15.5731 15.5729C15.3003 15.8456 14.9304 15.9989 14.5446 15.9989C14.3593 16.0065 14.1744 15.9756 14.0016 15.908C13.8288 15.8404 13.672 15.7376 13.5411 15.6062L7.99966 9.99201L2.40006 15.5916C2.27717 15.7185 2.13036 15.8199 1.9681 15.8898C1.80584 15.9597 1.63134 15.9967 1.45468 15.9989C1.06894 15.9989 0.698993 15.8456 0.426233 15.5729C0.153472 15.3001 0.000236647 14.9302 0.000236647 14.5444C-0.00315437 14.3661 0.0299297 14.189 0.0974587 14.0239C0.164988 13.8588 0.265537 13.7093 0.392936 13.5845L6.05071 7.99943L0.392936 2.34165C0.153222 2.10713 0.012657 1.78956 0.000236647 1.45444C0.000236647 1.0687 0.153472 0.698756 0.426233 0.425996C0.698993 0.153235 1.06894 0 1.45468 0C1.80374 0.00436332 2.13827 0.145444 2.38552 0.392699Z" fill="black" />
                        </svg>
                    </span>
                </div>
                <div className='row'>
                    <hr />
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="name">Full Name*</label>
                            <input type="text" id='name' placeholder='Enter your Name' />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="number">Mobile Number*</label>
                            <input type="number" id='number' placeholder='Enter your Mobile Number' />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="email">Pincode*</label>
                            <input type="number" id='email' placeholder='Enter your email' />
                        </div>
                    </div>
                </div>
                <div className="form-contr py-lg-2">
                    <label htmlFor="password">Address*</label>
                    <input type="text" id='password' placeholder='Enter your Address' />
                </div>
                <div className='row py-lg-2'>
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="name">State*</label>
                            <input type="text" id='name' placeholder='Enter your State' />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="number">City*</label>
                            <input type="text" id='number' placeholder='Enter your City' />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-contr">
                            <label htmlFor="email">Locality/Town*</label>
                            <input type="text" id='email' placeholder='Enter your Town' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <h5 className='py-2'>Type Of Address</h5>
                    </div>
                    <div>
                        <ul className='d-flex gap-2 p-0 pt-2'>
                            <li className='d-flex gap-2'>
                                <input type='radio' name='address' />
                                <p>Home</p>
                            </li>
                            <li className='d-flex gap-2'>
                                <input type='radio' name='address' />
                                <p>Office</p>
                            </li>
                        </ul>
                        <ul className=' p-0'>
                            <li className='my-1 py-2 d-flex gap-2'>
                                <input type='checkbox' />
                                <p>
                                    Is your office open on sunday
                                </p>
                            </li>
                            <li className='my-1 py-2 d-flex gap-2'>
                                <input type='checkbox' />
                                <p>
                                    Is your office open on saturday
                                </p>
                            </li>
                        </ul>
                        <hr />
                        <div className='d-flex gap-2'>
                            <input type='checkbox' />
                            <p>
                                Is your office open on sunday
                            </p>
                        </div>

                    </div>
                </div>

                <div className='d-flex justify-content-end gap-3'>
                    <button className='c-btn btn-black'>Cancel</button>
                    <button className='c-btn btn-voilet'>Add New Address</button>
                </div>
            </div>
        </form>
    )
}

export default AddAddress
