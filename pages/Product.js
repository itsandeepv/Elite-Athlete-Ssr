import React, { useEffect, useState } from 'react'
import axios from 'axios';
import c from "@constants/Common";
import { useDispatch, useSelector } from 'react-redux';
import { getCartListCount } from '@redux/actions/CartListCountActions';
import { baseUrl } from '@utils/urls';
import Breadcrums from '@components/Breadcrums/Breadcrums';
import Layout from '@components/Layouts/Layout';
import LoaderSmall from '@components/Modal/LoaderSmall';
import ProductCard from '@components/Cards/ProductCard';
import Loader from '@components/Modal/Loader';
import Head from 'next/head';
import PropTypes from 'prop-types';


function Product({  productData ,productDataForFi }) {
    const { userData } = useSelector((state) => state);
    const dispatch = useDispatch();
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const [brandData, setBrandData] = useState([]);
    const [data, setData] = useState([]);
    const [dataForFi, setDataForFi] = useState([]);
    const id = urlParams.get('id');
    const [brandIds, setBrandId] = useState(type === 'brand' ? [Number(id)] : []);
    const [brandname, setBrandName] = useState([]);
    const [disCount, setdisCount] = useState();
    const [itemshort, setitemshort] = useState();
    const [priceRangeArr, setpriceRangeArr] = useState();
    const [loading, setLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);
    const [openFilter, setopenFilter] = useState(false)

    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: `All Categories By ${type}`,
            path: "/categories"
        },
        {
            title: data?.category_name ?? data?.brand_names
        },
    ]

    const fetchData = async (ids) => {
        try {
            setProductLoading(true);
            let response;
            if (type === 'category' || (type === 'category' && brandIds?.length > 0)) {
                const postdata = new FormData();
                postdata.append("brand_id", brandIds?.join(','));
                postdata.append("category_id", id);
                postdata.append("type", brandIds?.length > 0 && `"brand"`);
                response = await axios.post(`${baseUrl}/api/get-product-by-category`, postdata);
                if (response.data.responseCode === 200) {
                    setData(response.data.result);
                    setDataForFi(response.data.result?.products)
                    setProductLoading(false);
                } else {
                    setProductLoading(false);
                }

            }

            if (type === 'brand' || (type === 'product' && brandIds?.length > 0)) {
                const brand_id = { brand_id: brandIds?.join(',') };
                response = await axios.post(`${baseUrl}/api/get-product-by-brand`, brand_id);
                if (response.data.responseCode === 200) {
                    console.log(response.data.result);
                    setData(response.data.result);
                    setDataForFi(response.data.result?.products)
                    setProductLoading(false);
                } else {
                    setProductLoading(false);
                }
            }
            if (type === 'product' && brandIds?.length == 0) {
                const product_id = { product_id: id };
                response = await axios.post(`${baseUrl}/api/get-product-by-product-id`, product_id);
                if (response.data.responseCode === 200) {
                    setData(response.data.result);
                    setDataForFi(response.data.result?.products)
                    setProductLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setProductLoading(false);
        }
    }

    const discountArr = [5, 20, 25, 50]
    const handleMultipleFilter = (brd, dis, priceA) => {
        const filteredData = dataForFi?.filter((item) => {
            const discountP = item?.product_attributes.length > 0 ? parseInt(item?.product_attributes[0]?.discount) : parseInt(item.discount)
            const findedprice = item?.product_attributes.length > 0 ? parseInt(item?.product_attributes[0]?.price) : parseInt(item.price)
            return (priceA && dis) ?
                ((discountP >= dis) && (findedprice >= Number(priceA?.min) && findedprice <= Number(priceA?.max))) :
                priceA ? (findedprice >= Number(priceA?.min) && findedprice <= Number(priceA?.max)) :
                    dis ? (discountP >= dis) : item
        })

        setData((preS) => ({ ...preS, products: filteredData }))

    }

    useEffect(() => {
        handleMultipleFilter(brandIds, disCount, priceRangeArr)
    }, [brandIds, disCount, priceRangeArr])
    useEffect(() => {
        if (type == "brand" || type == 'product' || type == "category") { fetchData(brandIds) }
    }, [brandIds])


    const fetchBrandData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${baseUrl}/api/get-brands`);
            if (res.data.responseCode === 200) {
                setBrandData(res.data.result.brands);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const priceRange = [
        { min: "50", max: "1500", id: 1 },
        { min: "1500", max: "10000", id: 2 },
        { min: "10000", max: "20000", id: 3 },
        { min: "20000", max: "100000", id: 4 },
    ]

    useEffect(() => {
        if (userData?.token) {
            dispatch(
                getCartListCount(
                    `/api/get-user-wishlist`,
                    userData?.token,
                    "WishListSuccess"
                )
            );
        }
    }, [userData?.token]);
    useEffect(() => { fetchData(brandIds); fetchBrandData() }, [])

    const sortData = (e) => {
        if (e != "") {
            data?.products?.sort((a, b) => {
                const attLengthB = b?.product_attributes.length > 0 ? parseInt(b?.product_attributes[0]?.price) : parseInt(b.price)
                const attLengthA = a?.product_attributes.length > 0 ? parseInt(a?.product_attributes[0]?.price) : parseInt(a.price)
                return e == "desc" ? attLengthB - attLengthA : attLengthA - attLengthB
            });
        }
    }

    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{c.APP_NAME}</title>
                <meta name="description" content={"all product"} />
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:url" content={c.BASE_URL} />
                <meta property="og:site_name" content={c.APP_NAME} />
                <link rel="shortcut icon" href={`${c.BASE_URL}/favicon.png`} />
                <link rel="icon" href="/footer-logo.svg"/>
                <link rel="canonical" href={`${c.BASE_URL}`} />
            </Head>
            <Layout>
                <div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <Breadcrums breadcumsDetails={breadcumsDetails} />
                            </div>
                        </div>
                    </div>
                    <div className="product-items" style={{ position: "relative" }}>
                        {loading && <LoaderSmall />}
                        <div className="container-fluid heading-main">
                            <h3>{brandname?.length > 0 ? brandname.join(",") : data?.category_name ?? data?.brand_names}</h3>
                        </div>
                        <div className="container-fluid main-cont">
                            <img src="assets/icons/hamburger.svg" onClick={() => { setopenFilter(!openFilter) }} alt="img" className="hamburger filter-ham" />
                            <div className={`filter-sec ${openFilter ? "opnfiltr" : ""} `} id='filter-sec' >
                                <h6 className='d-flex justify-content-between align-items-center pr-3 filter-head'>Filter
                                    <i className="fa-solid fa-x cross-filter" onClick={() => { setopenFilter(false) }}></i>
                                </h6>

                                <p className='head'>BRAND
                                    {/* <span >Clear</span> */}
                                </p>
                                {
                                    brandIds?.length > 0 &&
                                    <span className='gray pb-2 cursor-pointer clear-span' onClick={() => {
                                        setBrandId([])
                                        setBrandName([])
                                    }} ><i className="fa-solid fa-x clear-button"></i> Clear</span>

                                }
                                {brandData?.map((item, index) => (
                                    <div key={index} >
                                        <label htmlFor="check1"><input type="checkbox"
                                            defaultChecked={item?.id == id && type === 'brand'}
                                            checked={brandIds?.find((itm) => itm == item?.id)}
                                            value={item?.id} onChange={(e) => {
                                                if (e.target.checked && !brandIds?.find((itm) => itm == item?.id)) {
                                                    // brandIds?.find((itm)=>itm == item?.id)
                                                    // console.log(item);
                                                    setBrandId((pre) => ([...pre, item?.id]))
                                                    setBrandName((pre) => ([...pre, item?.name]))
                                                    // fetchFilterData()
                                                } else {
                                                    setBrandId((pre) => ([...pre.filter((elm) => elm != item?.id)]))
                                                    setBrandName((pre) => ([...pre.filter((elm) => elm != item?.name)]))
                                                }
                                                // console.log(e.target.checked,brandIds?.join(","),  "<<<<<<<<setBrandId");

                                            }} name="check1" id="check1" /> <span>
                                                {item?.name}
                                                {/* ({item?.totalBrandByProductCount || 0}) */}
                                            </span></label>
                                    </div>
                                ))}
                                <p className='head'>PRICE
                                </p>
                                {
                                    priceRangeArr &&
                                    <span className='gray pb-2 cursor-pointer clear-span' onClick={() => {
                                        setpriceRangeArr()
                                    }}><i className="fa-solid fa-x clear-button"></i>Clear</span>

                                }
                                {
                                    priceRange?.map((item, index) => {
                                        return (
                                            <label key={index} htmlFor="check4"><input type="radio" name="priceRange"
                                                checked={priceRangeArr?.id == item?.id}
                                                value={item?.id}
                                                onChange={(e) => {
                                                    setpriceRangeArr(item)
                                                    // console.log(item , );
                                                    // if (e.target.checked && !priceRangeArr?.find((itm) => itm == item?.id)) {
                                                    //     setpriceRangeArr((pre) => ([...pre, item]))
                                                    // } else {
                                                    //     setpriceRangeArr((pre) => ([...pre.filter((elm) => elm != item?.id)]))
                                                    // }
                                                    // console.log(e.target.checked, priceRangeArr?.join(","), "<<<<<<<<setBrandId");

                                                }}
                                                id="check4" /> <span>Rs. {item?.min} to Rs. {item?.max} </span></label>
                                        )
                                    })
                                }
                                <p className='head'>DISCOUNT RANGE
                                </p>
                                {
                                    disCount &&
                                    <span className='gray pb-2 cursor-pointer clear-span' onClick={() => {
                                        setdisCount()
                                    }} ><i className="fa-solid fa-x clear-button"></i>Clear</span>
                                }
                                {
                                    discountArr?.map((dis, index) => {
                                        return (
                                            <label key={index} htmlFor="check7"><input type="radio"
                                                checked={dis == disCount}
                                                onChange={(e) => {
                                                    setdisCount(dis)
                                                    // if (e.target.checked && !disCount?.find((itm) => itm == dis)) {
                                                    //     setdisCount((pre) => ([...pre, dis]))
                                                    // } else {
                                                    //     setdisCount((pre) => ([...pre.filter((elm) => elm != dis)]))
                                                    // }
                                                    // console.log(e.target.checked, disCount?.join(","), "<<<<<<<<setBrandId");

                                                }} value={dis} name="discount" id="check7" /> <span>{dis}% and above</span></label>
                                        )
                                    })
                                }
                            </div >
                            <div className="all-items">
                                <div className="sel-container">
                                    <span>Sort by :</span>
                                    <select onChange={(e) => {
                                        sortData(e.target.value)
                                        setitemshort(e.target.value)
                                    }}>
                                        <option value="">Select</option>
                                        <option value="desc">High-to-low</option>
                                        <option value="asc">Low-to-high</option>
                                        {/* <option value="Recommended3">Recommended3</option> */}
                                    </select>
                                </div>
                                <>
                                    {data?.products?.length > 0 ? (
                                        data?.products?.map((product) => (
                                            <ProductCard key={product.id} pLength={data?.products?.length} product={product} hidebutton={true} />
                                        ))
                                    ) : (
                                        <p className='text-center'>{productLoading && <Loader /> ? 'Loading...' : 'No products found'}</p>
                                    )}

                                </>

                            </div>
                        </div >
                    </div >
                </div >
            </Layout >
        </React.Fragment >
    )
}

Product.propTypes = {
    pagename: PropTypes,
};


export async function getServerSideProps(context) {
    const { query } = context;
    var pageProps = {};
    var productData =[]
    var productDataForFi =[]
    if(query.type == 'category'){
        const postdata = new FormData();
        postdata.append("category_id", query.id);
        let response = await axios.post(`${baseUrl}/api/get-product-by-category`, postdata);
        if (response.data.responseCode === 200) {
            productData = response.data.result
            productDataForFi = response.data.result?.products
        } 
    }
    if(query.type == 'brand'){
        const brand_id = { brand_id: query.id };
        let response = await axios.post(`${baseUrl}/api/get-product-by-brand`, brand_id);
        if (response.data.responseCode === 200) {
            productData = response.data.result
            productDataForFi = response.data.result?.products
        }
    }
    if(query.type == 'product'){
        const product_id = { product_id: query.id };
       let response = await axios.post(`${baseUrl}/api/get-product-by-product-id`, product_id);
        if (response.data.responseCode === 200) {
            productData = response.data.result
            productDataForFi = response.data.result?.products
        }
    }
   

    return { props: { productData ,productDataForFi } }
}


export default Product
