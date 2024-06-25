import React, { useState } from 'react'
import WriteReviews from '../Modal/WriteReviews'
import { useDispatch } from 'react-redux'
import { handlePopup } from '../../redux/actions/popupActions'
import moment from 'moment'
import { formatCurrency } from '../../helpers/frontend'
import { baseUrl } from '../../utils/urls'

function PurchaseHistory({ setshowPopup, userOrderData }) {
    const dispatch = useDispatch()

    const userOrderDataformate = userOrderData?.map((item) => {
        const formatedData = []
        item?.order_items.forEach((elm) => (formatedData.push({ ...elm, order_details: item?.order_details, review: item?.product_reviews })))
        return formatedData.flat()
    }).flat()

    const [searchInput, setsearchInput] = useState("")
    return (
        <React.Fragment>
            <div className='section-details p-1'>
                <div className='border-bottom pb-3 d-lg-flex align-items-center justify-content-between '>
                    <h3 className='mb-2 md-lg-0'>All Orders</h3>
                    <div className='search-all-order'>
                        <div className="form-contr search-input py-lg-2 position-relative">
                            <span className='search-icon'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58342 18.1253C4.87508 18.1253 1.04175 14.292 1.04175 9.58366C1.04175 4.87533 4.87508 1.04199 9.58342 1.04199C14.2917 1.04199 18.1251 4.87533 18.1251 9.58366C18.1251 14.292 14.2917 18.1253 9.58342 18.1253ZM9.58342 2.29199C5.55841 2.29199 2.29175 5.56699 2.29175 9.58366C2.29175 13.6003 5.55841 16.8753 9.58342 16.8753C13.6084 16.8753 16.8751 13.6003 16.8751 9.58366C16.8751 5.56699 13.6084 2.29199 9.58342 2.29199Z" fill="#510665" />
                                    <path d="M18.3333 18.9585C18.175 18.9585 18.0166 18.9002 17.8916 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4666 15.9835 16.8666 15.9835 17.1083 16.2252L18.775 17.8919C19.0166 18.1335 19.0166 18.5335 18.775 18.7752C18.65 18.9002 18.4916 18.9585 18.3333 18.9585Z" fill="#510665" />
                                </svg>
                            </span>
                            <input type="search" onChange={(e) => { setsearchInput(e.target.value) }} value={searchInput} className='pl-4' placeholder='Search in Orders' />
                        </div>
                    </div>
                </div>
                <div className='row p-2 puchase-product-container'>
                    {
                        userOrderData.map((ord, index) => {
                            return (
                                <div key={index} className='dashboard-address-list p-lg-3 mt-3' >
                                  
                                    <div className='purchase-container'>
                                        <div className='images-item'>
                                            {
                                                userOrderData?.length > 0 ? ord.order_items.filter((item) => {
                                                    if (searchInput == "") {
                                                        return item
                                                    } else {
                                                        return item?.product_name?.toLowerCase().includes(searchInput?.toLowerCase())
                                                    }
                                                }).map((item, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <div className='py-3 d-flex justify-content-center align-items-end ordered-items'>
                                                                <div className='d-flex gap-3 align-items-center'>
                                                                    <div className='purchase-image p-3'>
                                                                        <a href={`/product-details?id=${item?.product_id}`}>
                                                                            <img src={item?.product_image ? `${baseUrl}/${item?.product_image}` : 'assets/images/historyproduct.png'} className='img-fluid' />
                                                                        </a>
                                                                    </div>
                                                                    {/* <a href={`/product-details?id=${item?.product_id}`}>
                                                                    <div>
                                                                        <h4><b> {item?.product_name?.substring(0, 35)}... </b></h4>
                                                                        <p className='gray bold-600 py-2'>{item?.variant_name || ""}</p>
                                                                        <p className='gray bold-600'>{formatCurrency(Number(item?.product_price),)}</p>
                                                                    </div>
                                                                </a> */}
                                                                </div>
                                                                {/* <div className='d-flex details-btn gap-3 pt-3' >
                                                                <div className='d-flex justify-content-between align-items-center all-stars'>
                                                                    {
                                                                        checkReview &&
                                                                        <span className='py-1'>
                                                                            {[...Array(5)].map((_, index) => {
                                                                                const starValue = index + 1;
                                                                                return (
                                                                                    <span
                                                                                        key={index}
                                                                                        // onClick={() => setRating(starValue)}
                                                                                        style={{ cursor: 'pointer', color: starValue <= Number(checkReview?.rating) ? 'gold' : 'gray', fontSize: "30px" }}
                                                                                    >
                                                                                        ★
                                                                                    </span>
                                                                                );
                                                                            })}
                                                                        </span>
                                                                    }
                                                                    {
                                                                        checkReview ? "" :
                                                                            <button className='btn border-none bg-white ' onClick={() => { dispatch(handlePopup({ ...item }, "Add_Review", true)) }}><b>Write Review</b></button>
                                                                    }
                                                                </div>
                                                                <button className='c-btn bg-voilet text-light' onClick={() => { dispatch(handlePopup({ productDetials: { ...item, selectedItem_id: item?.id } }, "trackorder", true)) }}>View Details</button>
                                                            </div> */}
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                }) :
                                                    <p className='text-center d-flex w-100 alig-items-center justify-content-center no-prod' style={{ minHeight: "100px" }}>
                                                        <span> No products found</span>
                                                        <a href='/' >Add Now</a>
                                                    </p>
                                            }

                                        </div>
                                        {
                                              userOrderData?.length > 0 && ord.order_items.filter((item) => {
                                                if (searchInput == "") {
                                                    return item
                                                } else {
                                                    return item?.product_name?.toLowerCase().includes(searchInput?.toLowerCase())
                                                }
                                            }).length > 0  ?
                                        <div className='view-all-detail'>
                                            <div className='py-2'>
                                                <p><span>Order Number :</span> {ord.order_details?.receipt_no} </p>
                                                <p><span>Total Cost :</span> {formatCurrency(Number(ord.order_details?.grand_total))} </p>
                                                <p><span>Order Date :</span> {moment(ord.order_details?.date).calendar()} </p>
                                            </div>
                                            <button className='c-btn bg-voilet text-light'
                                                onClick={() => { dispatch(handlePopup({ productDetials: { order_id: ord.order_details.id } }, "trackorder", true)) }}>
                                                View Details
                                            </button>
                                        </div>:
                                         <p className='text-center d-flex w-100 alig-items-center justify-content-center no-prod' style={{ minHeight: "100px" }}>
                                         <span> No products found</span>
                                         <a href='/' >Add Now</a>
                                     </p>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PurchaseHistory