import React from 'react'
import { handlePopup } from '../../redux/actions/popupActions'
import { useDispatch } from 'react-redux'
import ProgressBar from './ProgressBar'

function TrackOrder() {
    const dispatch = useDispatch()
    return (
        <div className='model-container '>
            <div className='model-content gap-2'>
                <div className='d-flex justify-content-between'>
                    <b>Order Id #56767546578</b>
                    <span className='cursor-pointer' onClick={() => { dispatch(handlePopup({ data: "test" }, "Add_Review", false)) }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38552 0.392699L7.99966 6.00684L13.5847 0.421788C13.7081 0.290477 13.8567 0.185433 14.0216 0.112955C14.1866 0.0404768 14.3645 0.00205708 14.5446 0C14.9304 0 15.3003 0.153235 15.5731 0.425996C15.8459 0.698756 15.9991 1.0687 15.9991 1.45444C16.0025 1.63276 15.9694 1.80989 15.9019 1.97496C15.8343 2.14003 15.7338 2.28956 15.6064 2.41437L9.94861 7.99943L15.6064 13.6572C15.8461 13.8917 15.9867 14.2093 15.9991 14.5444C15.9991 14.9302 15.8459 15.3001 15.5731 15.5729C15.3003 15.8456 14.9304 15.9989 14.5446 15.9989C14.3593 16.0065 14.1744 15.9756 14.0016 15.908C13.8288 15.8404 13.672 15.7376 13.5411 15.6062L7.99966 9.99201L2.40006 15.5916C2.27717 15.7185 2.13036 15.8199 1.9681 15.8898C1.80584 15.9597 1.63134 15.9967 1.45468 15.9989C1.06894 15.9989 0.698993 15.8456 0.426233 15.5729C0.153472 15.3001 0.000236647 14.9302 0.000236647 14.5444C-0.00315437 14.3661 0.0299297 14.189 0.0974587 14.0239C0.164988 13.8588 0.265537 13.7093 0.392936 13.5845L6.05071 7.99943L0.392936 2.34165C0.153222 2.10713 0.012657 1.78956 0.000236647 1.45444C0.000236647 1.0687 0.153472 0.698756 0.426233 0.425996C0.698993 0.153235 1.06894 0 1.45468 0C1.80374 0.00436332 2.13827 0.145444 2.38552 0.392699Z" fill="black" />
                        </svg>
                    </span>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <div className='purchase-image p-3'>
                        <img src='assets/images/historyproduct.png' className='img-fluid' />
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <p className='gray'><b> Quercetion </b> -500 mg - 200 caps </p>
                        <p className='commen-text'>Price: ₹1,199</p>
                        <p className='commen-text'>Coupon: 1 coupon applied</p>
                    </div>
                </div>
                <div>
                    <b className='pt-3'>Tracking</b>
                    <ProgressBar/>
                </div>
                <div className='row border-bottom-g'>
                    <div className='col-lg-6 p-3 d-flex flex-column gap-2'>
                        <p> <b>Shipping Details</b>  </p>
                        <p className='gray bold-600'>Olivia Rhye </p>
                        <p className='gray bold-600 '>B54, 2nd floor <br />
                            Sector 8, Noida, Uttar Pradesh, India, 110010</p>

                    </div>
                    <div className='col-lg-6 p-3 d-flex flex-column gap-2'>
                        <p> <b>Payment Methods</b>  </p>
                        <p className='gray bold-600 '>Via Visa Card ending with 1889</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                    <div className='order-summery pt-1'>
                        <h5>Order Summary </h5>
                        <p className='d-flex justify-content-between py-1' ><b className='gray'>Item(s) Subtotal:</b>₹550.00 </p>
                        <p className='d-flex justify-content-between py-1' ><b className='gray'>Shipping:</b>₹50.00 </p>
                        <p className='d-flex justify-content-between py-1' ><b className='gray'>Total:</b>₹590.00 </p>
                        <p className='d-flex justify-content-between py-1' ><b className='gray'>Coupon Applied:</b>- ₹150.00 </p>
                        <p className='d-flex justify-content-between py-1' ><b className='gray'>Grand Total:</b>₹450.00 </p>
                        {/* <button className='c-btn bg-voilet w-100 mt-3 text-light '>Proceed to Payment</button> */}
                    </div>
                    </div>

                </div>
                <div className='d-flex justify-content-end gap-3'>
                    <button className='c-btn bg-voilet text-light' onClick={() => { dispatch(handlePopup({ data: "test" }, "Add_Review", false)) }}>Back To Order History</button>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder