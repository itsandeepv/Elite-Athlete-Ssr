import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Head from 'next/head';
import c from "@constants/Common";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import moment from 'moment'
import Slider from 'react-slick'
import { getCartListCount } from '@redux/actions/CartListCountActions';
import { baseUrl } from '@utils/urls';
import Layout from '@components/Layouts/Layout';
import Loader from '@components/Modal/Loader';
import Breadcrums from '@components/Breadcrums/Breadcrums';
import LoaderSmall from '@components/Modal/LoaderSmall';
// import ProductdetailsCard from '@components/Cards/ProductdetailsCard';
import PropTypes from 'prop-types';
import TopdealsCard from '@components/Cards/TopDeals';
import ProductdetailsCard from '@components/Cards/ProductdetailsCard';

function ProductDetailsPage({ productdetails, relatedProduct, productVarintdetails }) {

    console.log("pageDataS", productdetails);
    const [data, setData] = useState(productdetails || []);
    const [loading, setLoading] = useState(false);
    const [catProductData, setCatProductData] = useState(relatedProduct.products || []);
    const { ProductByVarientData } = useSelector((state) => state);
    const [productReviewCount, setProductReviewCount] = useState([]);
    const [productReviewData, setProductReviewData] = useState([]);
    const { userData } = useSelector((state) => state)
    const [productLoading, setProductLoading] = useState(false);
    const [catProductLoading, setCatProductLoading] = useState(false);
    const dispatch = useDispatch()
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(params, id, "<<<<<<<<<userData");
    useEffect(() => {
        if (userData?.token) {
            dispatch(getCartListCount(`/api/get-cart-list`, userData?.token, "CartListSuccess"));
        }
    }, [])

    const fetchData = async () => {
        try {
            setProductLoading(true);
            const product_id = { product_id: id };
            const response = await axios.post(`${baseUrl}/api/get-single-product`, product_id);
            if (response.data.responseCode === 200) {
                // setData(response.data.result);
                setData({ ...response.data.result, galleryImg: response.data.result?.images });
                setProductLoading(false);
            } else {
                setProductLoading(false);
                toast.warning(response.data?.result)
            }
        } catch (error) {
            setProductLoading(false);
            console.log(error);
        }
    }

    const fetchCateProductData = async () => {
        try {
            if (data && data.category_id) {
                setCatProductLoading(true);
                const category_id = { category_id: data.category_id };
                const response = await axios.post(`${baseUrl}/api/get-product-by-category`, category_id);
                if (response.data.responseCode === 200) {
                    setCatProductData(response.data.result.products);
                    setCatProductLoading(false);
                } else {
                    toast.error(response?.data?.result);
                    setCatProductLoading(true);
                }
            }
        } catch (error) {
            console.log(error);
            setCatProductLoading(false);
        }
    }

    const fetchProductReviewData = async () => {
        try {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            const product_id = { product_id: id };
            if (product_id) {
                const response = await axios.post(`${baseUrl}/api/get-product-reviews`, product_id);
                setProductReviewData(response.data.result.reviews);
                setProductReviewCount(response.data.result.total_reviews_count);
                setLoading(false);
            }
        } catch (error) {
        }
    }

    const setProductReviewLike = async (type, review_id) => {
        try {
            if (type === 'like') {
                const response = await axios.post(`${baseUrl}/api/add-product-review-like`, { review_id: review_id });
                fetchProductReviewData();
            }
            if (type === 'dislike') {
                const response = await axios.post(`${baseUrl}/api/add-product-review-dislike`, { review_id: review_id });
                fetchProductReviewData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteReview = async (id) => {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('review_id', id);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl + '/api/delete-product-review',
            headers: {
                Authorization: `Bearer ${userData?.token}`,
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                if (response.data?.responseCode == 200) {
                    toast.success(response.data?.message)
                    fetchProductReviewData()
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        // fetchData();
        fetchProductReviewData();
    }, []);

    useEffect(() => {
        // fetchCateProductData();
    }, [data]);

    useEffect(() => {
        setData({ ...data, ...ProductByVarientData.ProductByVarientData });
    }, [ProductByVarientData.ProductByVarientData]);

    const [tabs, setTabs] = useState(1);

    const isSectionActive = (tabNumber) => {
        return tabNumber === tabs ? 'isSectionActive' : '';
    };

    const handleTabClick = (tabNumber) => {
        setTabs(tabNumber);
    };
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: data ? data.product_name?.substring(0, 35) : "Product",
            path: "/"
        },
    ]
    // console.log(data);



    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        autoplay: false,
        vertical: windowWidth > 991 ? true : false,
        verticalSwiping: windowWidth > 991 ? true : false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: false,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{data?.product_name?.substring(0, 35)}</title>
                <meta name="description" content={data?.meta_description} />
                {/* <meta name="keywords" content="Home" /> */}
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:url" content={c.BASE_URL} />
                <meta property="og:site_name" content={c.APP_NAME} />
                <meta property="og:image" content={`${baseUrl}${data?.meta_image}`} />
                <link rel="shortcut icon" href={`${baseUrl}/${data.thumbnail || "favicon.png"}`} />
                <link rel="canonical" href={`${c.BASE_URL}`} />
            </Head>
            <Layout>
                {/* {productLoading ? (
                    <Loader />
                ) : ( */}
                <div className='container-fluid' style={{ overflowX: "hidden" }}>
                    <div className='row'>
                        <div className='col'>
                            <Breadcrums breadcumsDetails={breadcumsDetails} />
                        </div>
                    </div>
                    <div className='row' style={{ position: "relative" }}>
                        {
                            productLoading ?
                                <LoaderSmall /> :
                                <>
                                    {
                                        !data?.product_name ?
                                            <p className='text-center d-flex w-100 alig-items-center justify-content-center no-prod' style={{ minHeight: "100px" }}>
                                                <span>No products found</span>
                                                <a href='/'>Home</a>
                                            </p> :
                                            <>
                                                <div className='col-lg-8 mb-5'>
                                                    <div>
                                                        <ProductdetailsCard products={data} setData={setData} productReviewCount={productReviewCount} />
                                                    </div>
                                                    <div className='mt-lg-2'>
                                                        <div className='product-description'>
                                                            <ul className='d-flex'>
                                                                <li className={`light-gray bold-600 ${isSectionActive(1)}`} onClick={() => handleTabClick(1)}>Description</li>
                                                                {
                                                                    data?.nutrition && data?.nutrition != "" &&
                                                                    <li className={`light-gray bold-600 ${isSectionActive(2)}`} onClick={() => handleTabClick(2)}>Nutrition</li>
                                                                }
                                                                <li className={`light-gray bold-600 ${isSectionActive(3)}`} onClick={() => handleTabClick(3)}>Review ({productReviewCount ? productReviewCount : 0})</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {tabs === 1 && (
                                                        <div dangerouslySetInnerHTML={{ __html: data?.long_description }} />
                                                    )}
                                                    {tabs === 2 && (
                                                        <div dangerouslySetInnerHTML={{ __html: (data?.nutrition ? data?.nutrition : "") || "" }} />
                                                    )}
                                                    {tabs === 3 && (
                                                        <div>
                                                            {productReviewData?.map((review, index) => (
                                                                <div className='row pb-2' key={index} style={{ borderBottom: "1px solid #ccc" }}>
                                                                    <h5 className='gray py-2 d-flex justify-content-between align-items-center'>{review?.customer_name}
                                                                        {
                                                                            userData?.userDetails?.id == review?.user_id &&
                                                                            <span className='cursor-pointer ' style={{ fontSize: "12px" }} onClick={() => {
                                                                                deleteReview(review?.id)
                                                                            }}>
                                                                                Delete Review
                                                                            </span>
                                                                        }
                                                                    </h5>
                                                                    <span className='py-2'>
                                                                        {[...Array(5)].map((_, index) => {
                                                                            const starValue = index + 1;
                                                                            return (
                                                                                <span
                                                                                    key={index}
                                                                                    style={{ cursor: 'pointer', color: starValue <= review?.rating ? 'gold' : 'gray', fontSize: "30px" }}
                                                                                >
                                                                                    ★
                                                                                </span>
                                                                            );
                                                                        })}
                                                                    </span>
                                                                    <p className='review-text'>
                                                                        {review.review}
                                                                        {/* {console.log(review , "<<<<review")} */}
                                                                    </p>
                                                                    <div className='review-img'>
                                                                        {review?.image?.length > 0 && review.image?.split(",").map((image, imgIndex) => (
                                                                            <a href={baseUrl + "/" + image?.trim()} target='_blank'>

                                                                                <img key={imgIndex} src={baseUrl + "/" + image?.trim()} alt={`img ${imgIndex}`} />
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <p className='gray'>
                                                                            {moment(review.created_at).calendar()}
                                                                        </p>
                                                                        {/* <button className='btn border-none bg-white' onClick={() => {
                                                        if (userData && userData.token) {
                                                            const params = new URLSearchParams(window.location.search);
                                                            const id = params.get('id');
                                                            dispatch(handlePopup({ product_id: id }, "Add_Review", true));
                                                        } else {
                                                            alert("Please login first");
                                                        }
                                                    }}>
                                                        <b>Write Review</b>
                                                    </button> */}

                                                                        {/* <div className='d-flex gap-2'>
                                                        <div className='d-flex gap-2 '>
                                                            <span className='cursor-pointer' onClick={() => setProductReviewLike('like', review.id)}>
                                                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M22.0008 10.1333C22.0008 8.73333 20.8675 8 19.3341 8H14.8675C15.2008 6.8 15.3341 5.66667 15.3341 4.66667C15.3341 0.8 14.2675 0 13.3341 0C12.7341 0 12.2675 0.0666669 11.6675 0.4C11.4675 0.533334 11.4008 0.666667 11.3341 0.866667L10.6675 4.46667C9.93415 6.33333 8.13415 8 6.66748 9.13333V18.6667C7.20081 18.6667 7.73415 18.9333 8.40081 19.2667C9.13415 19.6 9.86748 20 10.6675 20H17.0008C18.3341 20 19.3341 18.9333 19.3341 18C19.3341 17.8 19.3341 17.6667 19.2675 17.5333C20.0675 17.2 20.6675 16.5333 20.6675 15.6667C20.6675 15.2667 20.6008 14.9333 20.4675 14.6C21.0008 14.2667 21.4675 13.6667 21.4675 13C21.4675 12.6 21.2675 12.2 21.0675 11.8667C21.6008 11.4667 22.0008 10.8 22.0008 10.1333ZM20.6008 10.1333C20.6008 11 19.7341 11.0667 19.6008 11.4667C19.4675 11.9333 20.1341 12.0667 20.1341 12.8667C20.1341 13.6667 19.1341 13.6667 19.0008 14.1333C18.8675 14.6667 19.3341 14.8 19.3341 15.6V15.7333C19.2008 16.4 18.2008 16.4667 18.0008 16.7333C17.8008 17.0667 18.0008 17.2 18.0008 17.9333C18.0008 18.3333 17.5341 18.6 17.0008 18.6H10.6675C10.1341 18.6 9.60081 18.3333 8.93415 18C8.40081 17.7333 7.86748 17.4667 7.33415 17.3333V10.3333C9.00081 9.06667 11.1341 7.2 11.9341 4.86667V4.73333L12.5341 1.4C12.8008 1.33333 13.0008 1.33333 13.3341 1.33333C13.4675 1.33333 14.0008 2.13333 14.0008 4.66667C14.0008 5.66667 13.8008 6.73333 13.4675 8H13.3341C12.9341 8 12.6675 8.26667 12.6675 8.66667C12.6675 9.06667 12.9341 9.33333 13.3341 9.33333H19.3341C20.0008 9.33333 20.6008 9.66667 20.6008 10.1333Z" fill="#5A0563" />
                                                                    <path d="M6.00081 20H2.00081C1.26748 20 0.66748 19.4 0.66748 18.6667V9.33333C0.66748 8.6 1.26748 8 2.00081 8H6.00081C6.73415 8 7.33415 8.6 7.33415 9.33333V18.6667C7.33415 19.4 6.73415 20 6.00081 20ZM2.00081 9.33333V18.6667H6.00081V9.33333H2.00081Z" fill="#5A0563" />
                                                                </svg>
                                                            </span>
                                                            {review.likes}
                                                        </div>
                                                        <div className='d-flex gap-2 '>
                                                            <span className='cursor-pointer' onClick={() => setProductReviewLike('dislike', review.id)}>
                                                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.00162785 9.86666C0.00162773 11.2667 1.13496 12 2.66829 12L7.13496 12C6.80163 13.2 6.66829 14.3333 6.66829 15.3333C6.66829 19.2 7.73496 20 8.66829 20C9.26829 20 9.73496 19.9333 10.335 19.6C10.535 19.4667 10.6016 19.3333 10.6683 19.1333L11.335 15.5333C12.0683 13.6667 13.8683 12 15.335 10.8667L15.335 1.33333C14.8016 1.33333 14.2683 1.06667 13.6016 0.733332C12.8683 0.399997 12.135 -2.79753e-07 11.335 -3.49691e-07L5.00163 -9.03369e-07C3.6683 -1.01993e-06 2.6683 1.06666 2.6683 2C2.6683 2.2 2.66829 2.33333 2.73496 2.46667C1.93496 2.8 1.33496 3.46666 1.33496 4.33333C1.33496 4.73333 1.40163 5.06667 1.53496 5.4C1.00163 5.73333 0.534961 6.33333 0.534961 7C0.534961 7.4 0.734963 7.8 0.934962 8.13333C0.401629 8.53333 0.00162791 9.2 0.00162785 9.86666ZM1.40163 9.86666C1.40163 9 2.26829 8.93333 2.40163 8.53333C2.53496 8.06666 1.86829 7.93333 1.86829 7.13333C1.86829 6.33333 2.86829 6.33333 3.00163 5.86666C3.13496 5.33333 2.6683 5.2 2.6683 4.4L2.6683 4.26667C2.80163 3.6 3.80163 3.53333 4.00163 3.26667C4.20163 2.93333 4.00163 2.8 4.00163 2.06666C4.00163 1.66667 4.4683 1.4 5.00163 1.4L11.335 1.4C11.8683 1.4 12.4016 1.66667 13.0683 2C13.6016 2.26667 14.135 2.53333 14.6683 2.66667L14.6683 9.66667C13.0016 10.9333 10.8683 12.8 10.0683 15.1333L10.0683 15.2667L9.46829 18.6C9.20163 18.6667 9.00163 18.6667 8.66829 18.6667C8.53496 18.6667 8.00163 17.8667 8.00163 15.3333C8.00163 14.3333 8.20163 13.2667 8.53496 12L8.66829 12C9.06829 12 9.33496 11.7333 9.33496 11.3333C9.33496 10.9333 9.06829 10.6667 8.66829 10.6667L2.66829 10.6667C2.00163 10.6667 1.40163 10.3333 1.40163 9.86666Z" fill="#5A0563" />
                                                                    <path d="M16.0016 -4.66255e-07L20.0016 -1.16564e-07C20.735 -5.24537e-08 21.335 0.599999 21.335 1.33333L21.335 10.6667C21.335 11.4 20.735 12 20.0016 12L16.0016 12C15.2683 12 14.6683 11.4 14.6683 10.6667L14.6683 1.33333C14.6683 0.599999 15.2683 -5.30365e-07 16.0016 -4.66255e-07ZM20.0016 10.6667L20.0016 1.33333L16.0016 1.33333L16.0016 10.6667L20.0016 10.6667Z" fill="#5A0563" />
                                                                </svg>
                                                            </span>
                                                            {review.dislikes}
                                                        </div>
                                                    </div> */}
                                                                    </div>
                                                                </div>
                                                            ))
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='col-lg-4'>
                                                    {
                                                        catProductData?.length > 0 &&
                                                        <div className='row'>
                                                            <div className='col py-2'>
                                                                <h2 className='heading-large'>Related Products</h2>
                                                            </div>
                                                            <div className='related-side-product col-lg-12 d-lg-flex flex-lg-column justify-content-center align-items-center mx-0'>
                                                                <Slider {...settings}>
                                                                    {catProductData?.length > 0 ? (
                                                                        catProductData?.map((product, index) => (
                                                                            <TopdealsCard key={index} details={product} />
                                                                        ))
                                                                    ) : (
                                                                        <p className='text-center'>{catProductLoading && <Loader /> ? 'Loading...' : 'No products found'}</p>
                                                                    )}
                                                                </Slider>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </>
                                    }
                                </>
                        }
                    </div>
                </div>
                {/* )} */}
            </Layout>
        </React.Fragment>
    )
}




ProductDetailsPage.propTypes = {
    pagename: PropTypes,
};


export async function getServerSideProps(context) {
    const { query } = context;
    const pagename = query.pagename || '';
    var productdetails = {}
    var productVarintdetails = {}
    if (query.vrN) {
        const dataFor = new FormData()
        dataFor.append("product_id", query?.id)
        dataFor.append("attribute_name[]", query.vrN)
        await axios.post(`${baseUrl}/api/get-single-product`, { product_id: query.id }).then((response) => {
            // console.log("response>>>>>>>", response.data);
            if (response.data.responseCode === 200) {
                productVarintdetails = response.data.result
            }
        }).catch((err) => {
            console.log(err);
            // toast.error("asdf")
        })

        await axios.request({
            method: 'post',
            url: `${baseUrl}/api/get-single-product-variant`,
            data: dataFor,
        }).then((response) => {
            // console.log("response>>>>>>>", response.data);
            if (response.data.responseCode === 200) {
                productdetails = { ...productVarintdetails, ...response.data.result }
            }
        }).catch((err) => {
            console.log(err);
        })

    } else {
        const product_id = { product_id: query.id || "48" };
        await axios.post(`${baseUrl}/api/get-single-product`, { product_id: query.id }).then((response) => {
            console.log("response>>>>>>>", response.data);
            if (response.data.responseCode === 200) {
                // setData(response.data.result);
                productdetails = response.data.result
            }
        }).catch((err) => {
            console.log(err);
            // toast.error("asdf")
        })
    }

    let relatedProduct = {}
    // if (data && data.category_id) {
    const category_id = { category_id: productdetails.category_id };
    await axios.post(`${baseUrl}/api/get-product-by-category`, category_id).then((response) => {
        // console.log(response.data);
        if (response.data.responseCode === 200) {
            // setData(response.data.result);
            relatedProduct = response.data.result
        }
    }).catch((err) => {
        console.log(err);
    })
    // console.log("response>>>>>>>", productVarintdetails);
    // console.log(query, "<<<<<<<pagename");
    return { props: { productdetails, productVarintdetails, relatedProduct } }
}
export default ProductDetailsPage