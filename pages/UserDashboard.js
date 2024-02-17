import React, { useState } from 'react'
import Layout from '@components/Layouts/Layout'
import UserAdList from '@components/User/UserAdList'
import UserProfile from '@components/User/UserProfile'
import PurchaseHistory from '@components/User/PurchaseHistory'
import SectionsHeading from '@components/Cards/SectionsHeading'

function UserDashboard() {
    const [showpopup, setshowPopup] = useState(false)
    const [isNewUser, setisNewUser] = useState(true)
    const locationData = window.location
    const [sidebartabs ,setsidebartabs] = useState("Profile")
    console.log();
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Wish List",
            path: "/"
        },

    ]
    return (
        <Layout >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col bg-light'>
                        <SectionsHeading title="User Dashboard" />
                    </div>
                </div>
                <div className='row mb-lg-2'>
                    <div className='user-dash-container'>
                        <div className=' p-lg-3'>
                            <h4>Account</h4>
                            <p className='gray'>Olivio ryio</p>
                        </div>
                        <div className='row border-top-v'>
                            <div className='col-lg-3 p-0 border-right-v'>
                                <div className='dashboard-sidebar border-bottom-g'>
                                    <div className='sidebar-items'>
                                        <p className='light-gray'>ACCOUNT</p>
                                        <ul className='item-list p-0 m-0'>
                                            <li><a href='#' onClick={()=>{setsidebartabs("Profile")}} className={`${sidebartabs == "Profile" ? 'isactive':"" }`} >Profile</a> </li>
                                            <li><a href='#' onClick={()=>{setsidebartabs("Address")}} className={`${sidebartabs == "Address" ? 'isactive':"" }`}>Address</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='dashboard-sidebar border-bottom-g'>
                                    <div className='sidebar-items'>
                                        <p className='light-gray'>ORDERS</p>
                                        <ul className='item-list p-0 m-0'>
                                        <li><a href='#' onClick={()=>{setsidebartabs("Purchase History")}} className={`${sidebartabs == "Purchase History" ? 'isactive':"" }`}>Purchase History</a> </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                                <div className='dashboard-sidebar '>
                                    <div className='sidebar-items'>
                                        <p className='light-gray'>LEGEL</p>
                                        <ul className='item-list p-0 m-0'>
                                            <li><a href='#'>Terms & Conditions</a> </li>
                                            <li><a href='#'>Privacy Policy</a> </li>
                                            <li><a href='#'>Refund Policy</a> </li>
                                            {/* <li><a href='#'>Address</a> </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9 p-lg-3'>
                                {
                                    sidebartabs == "Address" ?
                                    <UserAdList/>:
                                    sidebartabs == "Profile" ?
                                    <UserProfile/> :
                                    sidebartabs == "Purchase History" ?
                                    <PurchaseHistory />:""
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard
