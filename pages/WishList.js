import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getCartListCount } from '@redux/actions/CartListCountActions';
import Layout from '@components/Layouts/Layout';
import Loader from '@components/Modal/Loader';
import Breadcrums from '@components/Breadcrums/Breadcrums';
import LoaderSmall from '@components/Modal/LoaderSmall';
import ProductCard from '@components/Cards/ProductCard';
import Head from 'next/head';
import { baseUrl } from '@utils/urls';

function WishList() {
    const { getWishListData } = useSelector((state) => state)
    const [data, setData] = useState(getWishListData.getWishListData);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const { userData } = useSelector((state) => state);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        dispatch(getCartListCount(`/api/get-user-wishlist`, userData?.token, "WishListSuccess"));
    }, [])

    useEffect(() => {
        setData([...getWishListData.getWishListData])
        // console.log(getWishListData , "<<<<<<<<loading");
    }, [loading, getWishListData])

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

    // document.getElementById("custom-loader-ssr").style.display = loading? "block": "none";


    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>Suppkart</title>
                <link rel="canonical" href={`${baseUrl}`} />
            </Head>
            <Layout>
                 {/* {loading ? (
                <Loader />
            ) : ( */}
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Breadcrums breadcumsDetails={breadcumsDetails} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='all-items wish-list-container' style={{ position: "relative" }}>
                            {isLoading && <LoaderSmall />}
                            {data?.length > 0 ? (
                                data.map(product => (
                                    <div className='wish-list-item'>
                                        <ProductCard setLoading={setLoading} setisLoading={setisLoading} key={product.id} product={product} isWishlistCard={true} />
                                    </div>
                                ))
                            ) : (
                                <p className='text-center d-flex w-100 alig-items-center justify-content-center no-prod' style={{ minHeight: "100px" }}>
                                    <span>No products found</span>
                                    <a href='/'>Add Now</a>
                                </p>
                            )}

                        </div>

                    </div>
                </div>
            {/* // )} */}
            </Layout>
        </React.Fragment>
    )
}

export default WishList
