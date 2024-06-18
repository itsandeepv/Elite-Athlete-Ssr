import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@components/Layouts/Layout';
import Loader from '@components/Modal/Loader';
import Breadcrums from '@components/Breadcrums/Breadcrums';


function Category() {
    const [loading, setLoading] = useState(false);
    const { categoryData } = useSelector((state) => state)
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "All Categories",
            path: "/"
        },
    ]

    return (
        <React.Fragment>
            <Layout>
                {loading ? (
                    <Loader />
                ) : (
                    <div>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                    <Breadcrums breadcumsDetails={breadcumsDetails} />
                                </div>
                            </div>
                        </div>
                        <div className="product-items cats">
                            <div className="container-fluid heading-main">
                                <h3>All Categories</h3>
                            </div>
                            <div className="container-fluid main-cont">
                                {
                                    categoryData?.categoryData?.map((item, index) => {
                                        return (
                                            <div key={index} className='col-lg-3 col-md-4 p-3 col-6'>
                                                <a href={`/all-product?type=category&id=${item?.id}`}>
                                                    <div className='goals-card'>
                                                        <img src={baseUrl + "/" + item?.image || 'assets/images/stars.png'} className='img-fluid category-image' alt='img' />
                                                        <div className='card-content'>
                                                            <h3>
                                                                {item?.name || "category name"}
                                                            </h3>
                                                            {/* <p>210 Products</p> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        </React.Fragment>
    )
}

export default Category