import Breadcrums from '@components/Breadcrums/Breadcrums'
import Layout from '@components/Layouts/Layout'
import AddAddress from '@components/Modal/AddAddress'
import CheckoutPaymentCard from '@components/Modal/CheckoutPaymentCard'
import React, { useState } from 'react'

function CheckoutFillDetails() {
    const [showpopup, setshowPopup] = useState(false)
    const [isNewUser, setisNewUser] = useState(true)
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Shopping Cart",

            path: "/"
        },
        {
            title: "Shopping Details",

            path: "/"
        },
    ]
    return (
        <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrums breadcumsDetails={breadcumsDetails} />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-lg-12'>
                        <div className='new-user-address'>
                            <AddAddress />
                        </div>
                    </div>
                    <div className='row py-2 mt-1 align-items-center'>
                    <div className='col-lg-8'>
                        <div className='row align-items-center'>
                            <div className='col-lg-3 p-1 d-flex justify-content-center'>
                                <div className='w-100 d-flex justify-content-center py-3' style={{border:"2px solid #5A0563"}}>
                                <img src='assets/images/gainer.png' alt='product-images' className='img-fluid'/>
                                </div>
                            </div>
                            <div className='col-lg-3 p-1 d-flex justify-content-center'>
                                <div className='w-100 d-flex justify-content-center py-3' style={{border:"2px solid #5A0563"}}>
                                <img src='assets/images/gainer.png' alt='product-images' className='img-fluid'/>
                                </div>
                            </div>
                            <div className='col-lg-3 p-1 d-flex justify-content-center'>
                                <div className='w-100 d-flex justify-content-center py-3' style={{border:"2px solid #5A0563"}}>
                                <img src='assets/images/gainer.png' alt='product-images' className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <CheckoutPaymentCard/>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CheckoutFillDetails
