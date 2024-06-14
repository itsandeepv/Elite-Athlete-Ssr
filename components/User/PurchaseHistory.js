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
    // console.log(userOrderDataformate, "<<<<<<<userOrderDataformate");
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
                        userOrderData?.length > 0 ? userOrderDataformate.filter((item) => {
                            if (searchInput == "") {
                                return item
                            } else {
                                return item?.product_name?.toLowerCase().includes(searchInput?.toLowerCase())
                            }
                        })?.map((item, index) => {
                            // console.log(item, "<<<<<<<<<<<userOrderDataformate");
                            const checkReview = item?.review?.find((itemr) => itemr?.product_id == item?.product_id)
                            return (
                                <React.Fragment>
                                    {
                                        item?.order_status == "6" ? <div className='dashboard-address-list p-lg-3 mt-3' key={index}>
                                            <div className='text-dark d-flex align-items-center gap-3'>
                                                <span>
                                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="20" cy="20.5" r="20" fill="#008F17" />
                                                        <path d="M19.5348 11.9068C19.5348 13.1485 19.5363 14.3298 19.5348 15.5111C19.5333 16.6095 18.7812 17.1074 17.8436 16.5469C17.145 16.1297 16.5823 16.1335 15.8853 16.5484C14.9438 17.1089 14.2015 16.6148 14.2008 15.5111C14.1993 14.3298 14.2008 13.1485 14.2008 11.9302C14.0831 11.9219 13.976 11.9084 13.8689 11.9076C12.1339 11.9061 10.3996 11.9053 8.6646 11.9076C8.05961 11.9076 7.85367 12.115 7.85367 12.7253C7.85216 17.7538 7.85291 22.7823 7.85367 27.8109C7.85367 28.4332 8.06187 28.6391 8.6993 28.6391C12.6212 28.6406 16.5438 28.6391 20.4657 28.6391C20.6286 28.6391 20.8157 28.5969 20.9492 28.661C21.0933 28.7312 21.2721 28.8994 21.2789 29.0329C21.2857 29.171 21.1273 29.3467 20.9968 29.4508C20.9175 29.5149 20.7554 29.4818 20.6301 29.4818C16.6705 29.4833 12.7102 29.4833 8.75059 29.4825C7.55419 29.4825 7.002 28.9281 7.00125 27.7286C6.99974 22.7514 6.99974 17.7727 7.0005 12.7947C7.0005 11.6096 7.54589 11.0635 8.72721 11.0635C14.1457 11.0635 19.5635 11.0635 24.982 11.0635C26.1859 11.0635 26.7268 11.6066 26.7276 12.8121C26.7283 14.5471 26.7276 16.2813 26.7276 18.0163C26.7276 18.6357 26.8656 18.8024 27.4804 18.9367C30.2142 19.5326 32.0782 21.9254 31.9975 24.7361C31.9205 27.4269 29.8679 29.7148 27.1462 30.1441C24.4705 30.5658 21.7662 28.8888 20.9213 26.2841C20.0674 23.6506 21.2321 20.7411 23.6392 19.4836C23.9116 19.341 24.1552 19.3168 24.3121 19.6186C24.4751 19.9324 24.2691 20.1059 24.0194 20.247C22.5349 21.0828 21.6832 22.3456 21.4992 24.0399C21.2148 26.6507 23.1625 29.0518 25.7703 29.3226C28.3027 29.5859 30.5567 27.9187 31.0643 25.4075C31.5494 23.0064 30.0656 20.5827 27.6705 19.869C27.4902 19.8155 27.3046 19.7815 27.1213 19.7393C26.3451 19.559 25.8895 19.0008 25.8872 18.2019C25.8827 16.3915 25.8865 14.5818 25.885 12.7713C25.885 12.1128 25.682 11.9076 25.0371 11.9068C23.3398 11.9061 21.6432 11.9068 19.9459 11.9068C19.823 11.9068 19.7 11.9068 19.5341 11.9068H19.5348ZM15.0457 11.9249C15.0457 13.1975 15.0419 14.4377 15.0487 15.6786C15.0502 15.9396 15.2101 15.9577 15.41 15.8574C15.7125 15.705 16.0173 15.5587 16.316 15.3995C16.6766 15.2071 17.0326 15.2003 17.3955 15.3889C17.6844 15.5391 17.9748 15.6892 18.2683 15.8302C18.5949 15.9879 18.6703 15.9434 18.6733 15.5836C18.6794 14.8677 18.6756 14.1518 18.6756 13.4359C18.6756 12.938 18.6756 12.4402 18.6756 11.9249H15.0464H15.0457Z" fill="white" />
                                                        <path d="M25.5719 25.275C26.3398 24.5025 27.0451 23.7919 27.7519 23.0836C27.8402 22.9953 27.9292 22.861 28.0326 22.8452C28.197 22.8195 28.4346 22.8173 28.5297 22.9138C28.624 23.0104 28.5998 23.2427 28.59 23.414C28.5862 23.4826 28.4867 23.549 28.4248 23.6108C27.6275 24.4097 26.8301 25.2093 26.029 26.0052C25.6873 26.3446 25.5183 26.3424 25.1773 26.0052C24.8296 25.6612 24.4856 25.3134 24.1386 24.9687C23.9349 24.7658 23.8489 24.5372 24.0752 24.3124C24.2947 24.0944 24.5331 24.1517 24.733 24.3644C25.0068 24.6549 25.2746 24.9513 25.5719 25.275Z" fill="white" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h4>
                                                        <b>Delivered</b>
                                                    </h4>
                                                    <p className='gray bold-600'>{moment(item?.created_at).calendar()}</p>
                                                </div>
                                            </div>
                                            <div className='purchase-container'>
                                                <div className='py-3 d-flex justify-content-between align-items-end'>
                                                    <div className='d-flex gap-3 align-items-center'>
                                                        <div className='purchase-image p-3'>
                                                            <a href={`/product-details?id=${item?.product_id}`}>
                                                                <img src={item?.product_image ? `${baseUrl}/${item?.product_image}` : 'assets/images/historyproduct.png'} className='img-fluid' />
                                                            </a>
                                                        </div>
                                                        <a href={`/product-details?id=${item?.product_id}`}>

                                                            <div>
                                                                <h4><b> {item?.product_name?.substring(0,35)}... </b></h4>
                                                                <p className='gray bold-600 py-2'>{item?.variant_name || ""}</p>
                                                                <p className='gray bold-600'>{formatCurrency(Number(item?.product_price),)}</p>
                                                            </div>
                                                        </a>

                                                    </div>
                                                    <div className='d-flex  align-items-center gap-3 pt-3'>
                                                        {/* <button className='c-btn bg-voilet text-light' onClick={() => {
                                                            // window.location = `/product-details?id=${item?.product_id}`
                                                        }}>View Details</button> */}
                                                        <button className='c-btn bg-voilet text-light' onClick={() => { dispatch(handlePopup({ productDetials: { ...item, selectedItem_id: item?.id } }, "trackorder", true)) }}>View Details</button>

                                                    </div>
                                                </div>
                                               
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
                                            </div>

                                        </div> : item?.order_status == "0" ?
                                            <div key={index} className='dashboard-address-list p-lg-3'>
                                                {

                                                    <div className='text-dark d-flex align-items-center gap-3'>
                                                        <span>
                                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="20" cy="20.5" r="20" fill="black" />
                                                                <path d="M7 13.0389C7.01614 13.012 7.03912 12.9866 7.04792 12.9572C7.24106 12.3162 7.64593 12.0062 8.32266 12.0032C9.47124 11.9979 10.6203 12.0008 11.7689 12.0008C15.3452 12.0008 18.922 12.0003 22.4983 12.0023C22.6929 12.0023 22.8939 11.9984 23.0812 12.0409C23.62 12.1636 24.0014 12.6521 24.0063 13.2169C24.0136 14.0476 24.0087 14.8789 24.0087 15.7096C24.0087 15.7971 24.0087 15.8842 24.0087 16.004C24.1413 16.004 24.2449 16.004 24.3491 16.004C25.8561 16.004 27.3636 16.0152 28.8706 16.0001C29.5331 15.9932 29.9795 16.2666 30.2695 16.8602C30.7365 17.818 31.2303 18.7627 31.7061 19.7162C31.8283 19.9617 31.9266 20.2194 32.0356 20.4712V26.9256C32.0141 26.9862 31.9907 27.0463 31.9711 27.1075C31.8048 27.6341 31.3374 27.9827 30.7814 27.9915C30.5942 27.9944 30.4059 28.0042 30.2196 27.9891C30.0314 27.9734 29.961 28.0419 29.9062 28.2272C29.5952 29.2775 28.6163 29.9963 27.5308 29.9958C26.4394 29.9953 25.4654 29.2814 25.1559 28.2296C25.0972 28.0301 25.0092 27.9881 24.819 27.9881C21.2759 27.9935 17.7333 27.9935 14.1903 27.9886C14.0172 27.9886 13.938 28.0311 13.8866 28.2076C13.5962 29.2081 12.7556 29.8848 11.6995 29.9894C10.7391 30.0848 9.74458 29.5269 9.29033 28.6335C9.18373 28.4238 9.1407 28.1191 8.97299 28.0194C8.79207 27.9118 8.49869 27.9959 8.2542 27.9915C7.68407 27.9808 7.22052 27.6267 7.05917 27.0835C7.04303 27.0297 7.02005 26.9784 7.00049 26.9256C7.00049 22.2965 7.00049 17.6679 7.00049 13.0389H7ZM15.5217 12.9748C13.1752 12.9748 10.8286 12.9748 8.48206 12.9748C8.02879 12.9748 7.98087 13.0227 7.98087 13.4794C7.98087 17.4963 7.98136 21.5132 7.98185 25.53C7.98185 25.9046 7.97842 26.2796 7.98331 26.6542C7.98674 26.9226 8.08649 27.017 8.35786 27.0224C8.51238 27.0258 8.66836 27.0136 8.82189 27.0263C8.99743 27.0405 9.07176 26.9793 9.1231 26.8009C9.42821 25.7418 10.39 25.0249 11.4853 25.021C12.6065 25.0166 13.5663 25.7159 13.8832 26.7847C13.936 26.9627 14.005 27.0282 14.1976 27.0278C17.0493 27.0214 19.9009 27.0204 22.7526 27.0292C22.9956 27.0297 23.0469 26.9515 23.0469 26.7231C23.0406 22.2906 23.0421 17.8586 23.0416 13.4261C23.0416 13.0379 22.9775 12.9748 22.5868 12.9748C20.232 12.9748 17.8776 12.9748 15.5227 12.9748H15.5217ZM24.0092 16.9814C24.0092 17.1169 24.0092 17.2132 24.0092 17.3095C24.0092 20.2839 24.0087 23.2583 24.0102 26.2327C24.0102 26.4835 23.931 26.841 24.0606 26.9564C24.2107 27.0899 24.5515 27.0009 24.8077 27.0268C25.016 27.0478 25.0977 26.9661 25.1573 26.7662C25.4444 25.8053 26.3514 25.0802 27.301 25.0269C28.4329 24.9633 29.3913 25.5325 29.8152 26.5212C29.8847 26.683 29.9062 26.9163 30.0275 26.9906C30.1653 27.0752 30.3898 27.0224 30.5766 27.0229C30.9751 27.0238 31.0538 26.9476 31.0538 26.5583C31.0543 24.6435 31.0557 22.7283 31.0499 20.8135C31.0499 20.681 31.0157 20.5362 30.9565 20.4174C30.4338 19.3686 29.8964 18.3276 29.3766 17.2772C29.2671 17.0557 29.1278 16.9746 28.8828 16.976C27.3508 16.9853 25.8189 16.9809 24.287 16.9809C24.2068 16.9809 24.1266 16.9809 24.0092 16.9809V16.9814ZM11.5122 25.9897C10.6707 25.9887 9.98564 26.6723 9.9871 27.5109C9.98906 28.3309 10.6741 29.0164 11.5005 29.0242C12.3224 29.032 13.0167 28.3465 13.0216 27.5226C13.0265 26.6772 12.3503 25.9907 11.5122 25.9897ZM26.0135 27.5118C26.016 28.3377 26.6976 29.0208 27.5239 29.0247C28.3513 29.0291 29.0559 28.323 29.049 27.4972C29.0422 26.6693 28.3601 25.9907 27.5337 25.9892C26.6927 25.9877 26.0111 26.6703 26.0135 27.5118Z" fill="white" />
                                                                <path d="M18.655 15.667C18.8863 15.9105 19.098 16.134 19.3254 16.3731C19.2867 16.4136 19.2285 16.4782 19.1669 16.5398C17.6125 18.0947 16.0581 19.6491 14.5032 21.2036C14.1247 21.5815 13.9154 21.5815 13.5399 21.2065C12.8143 20.4814 12.0886 19.7557 11.3635 19.0301C11.3068 18.9734 11.253 18.9137 11.209 18.8673C11.4364 18.6355 11.6554 18.4116 11.8901 18.1725C12.5889 18.8727 13.2944 19.5797 14.0367 20.3244C15.5843 18.7631 17.1182 17.216 18.655 15.666V15.667Z" fill="white" />
                                                                <path d="M27.5177 21.9804C26.8825 21.9804 26.2474 21.9818 25.6122 21.9799C25.2166 21.9789 25.0465 21.8121 25.0455 21.4161C25.0425 20.4636 25.043 19.5106 25.0455 18.5581C25.0465 18.1933 25.2107 18.0099 25.577 18.005C26.375 17.9943 27.173 18.0011 27.971 18.0016C28.214 18.0016 28.3866 18.1131 28.4961 18.3322C28.9787 19.2993 29.4682 20.2636 29.9469 21.2332C30.142 21.6283 29.9161 21.9764 29.4716 21.9794C28.8203 21.9833 28.1685 21.9804 27.5172 21.9804H27.5177ZM26.0219 20.999H28.7132C28.6917 20.9349 28.6819 20.888 28.6614 20.8469C28.3749 20.2729 28.0917 19.6969 27.7935 19.1292C27.7558 19.0578 27.637 18.9918 27.5534 18.9884C27.1881 18.9732 26.8219 18.982 26.4562 18.982C26.3139 18.982 26.1721 18.982 26.0224 18.982V20.999H26.0219Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        <div>
                                                            <h4>
                                                                <b>Shipped</b>
                                                            </h4>
                                                            <p className='gray bold-600'>{moment(item?.created_at).calendar()}</p>
                                                        </div>
                                                    </div>
                                                }


                                                <div className='purchase-container' >
                                                    <div className='py-3 d-flex justify-content-between align-items-end'>
                                                        <div className='d-flex gap-3 align-items-center' >
                                                            <div className='purchase-image p-3'>
                                                                <a href={`/product-details?id=${item?.product_id}`}>
                                                                    <img src={item?.product_image ? `${baseUrl}/${item?.product_image}` : 'assets/images/historyproduct.png'} className='img-fluid' />
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href={`/product-details?id=${item?.product_id}`}>
                                                                    <h4><b>{item.product_name}</b></h4>
                                                                    <p className='gray bold-600 py-2'>{item?.variant_name || ""}</p>
                                                                    <p className='gray bold-600'>{formatCurrency(Number(item?.product_total),)}</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center gap-3 pt-3'>
                                                            <button className='c-btn bg-voilet text-light' onClick={() => { dispatch(handlePopup({ productDetials: { ...item, selectedItem_id: item?.id } }, "trackorder", true)) }}>View Details</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div> : item?.order_status == "2" ?
                                                <div key={index} className='dashboard-address-list p-lg-3 mt-3'>
                                                    <div className='text-dark d-flex align-items-center gap-3'>
                                                        <span>
                                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="20" cy="20.5" r="20" fill="#EF262C" />
                                                                <path d="M9.72062 30.7791C9.47267 30.5311 9.33337 30.1947 9.33337 29.844C9.33337 29.4933 9.47267 29.1569 9.72062 28.9089L18.1378 20.4917L9.72062 12.0745C9.47969 11.825 9.34638 11.4909 9.34939 11.1441C9.35241 10.7974 9.49151 10.4656 9.73673 10.2204C9.98196 9.97517 10.3137 9.83607 10.6605 9.83306C11.0073 9.83004 11.3414 9.96336 11.5908 10.2043L20.008 18.6215L28.4252 10.2043C28.6747 9.96336 29.0088 9.83004 29.3556 9.83306C29.7024 9.83607 30.0341 9.97517 30.2793 10.2204C30.5245 10.4656 30.6636 10.7974 30.6667 11.1441C30.6697 11.4909 30.5364 11.825 30.2954 12.0745L21.8782 20.4917L30.2954 28.9089C30.5364 29.1583 30.6697 29.4924 30.6667 29.8392C30.6636 30.186 30.5245 30.5178 30.2793 30.763C30.0341 31.0082 29.7024 31.1473 29.3556 31.1503C29.0088 31.1533 28.6747 31.02 28.4252 30.7791L20.008 22.3619L11.5908 30.7791C11.3428 31.027 11.0064 31.1663 10.6557 31.1663C10.305 31.1663 9.96865 31.027 9.72062 30.7791Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        <div>
                                                            <h4>
                                                                <b>Canceled</b>
                                                            </h4>
                                                            <p className='gray bold-600'> {moment(item?.created_at).calendar()} as per request</p>
                                                        </div>
                                                    </div>
                                                    <div className='purchase-container'>
                                                        <div className='py-3 d-flex justify-content-between align-items-end'>
                                                            <div className='d-flex gap-3 align-items-center'>
                                                                <div className='purchase-image p-3'>
                                                                    <a href={`/product-details?id=${item?.product_id}`}>
                                                                        <img src={item?.product_image ? `${baseUrl}/${item?.product_image}` : 'assets/images/historyproduct.png'} className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div >
                                                                    <a href={`/product-details?id=${item?.product_id}`}>

                                                                        <h4><b> {item.product_name} </b></h4>
                                                                        <p className='gray bold-600 py-2'>{item?.variant_name || ""}</p>
                                                                        <p className='gray bold-600'>{formatCurrency(Number(item?.product_total),)}</p>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex  align-items-center gap-3 pt-3'>
                                                                {/* <button className='c-btn bg-voilet text-light' onClick={() => {
                                                                    window.location = `/product-details?id=${item?.product_id}`
                                                                }}>
                                                                    View Details</button> */}
                                                                <button className='c-btn bg-voilet text-light' onClick={() => { dispatch(handlePopup({ productDetials: { ...item, selectedItem_id: item?.id } }, "trackorder", true)) }}>View Details</button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                : ""
                                    }
                                </React.Fragment>

                            )
                        }) :
                            <p className='text-center d-flex w-100 alig-items-center justify-content-center no-prod' style={{ minHeight: "100px" }}>
                               <span> No products found</span>
                                <a href='/' >Add Now</a>
                            </p>
                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default PurchaseHistory