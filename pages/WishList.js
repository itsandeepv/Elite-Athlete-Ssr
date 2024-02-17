import Breadcrums from '@components/Breadcrums/Breadcrums'
import ProductCard from '@components/Cards/ProductCard'
import Layout from '@components/Layouts/Layout'
import React, { useState } from 'react'

function WishList() {
    const [showpopup, setshowPopup] = useState(false)
    const [isNewUser, setisNewUser] = useState(true)
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
        <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrums breadcumsDetails={breadcumsDetails} />
                    </div>
                </div>
                <div className='row'>
                    <div className='all-items wish-list-container'>
                        <div className='wish-list-item'>
                            <ProductCard />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default WishList
