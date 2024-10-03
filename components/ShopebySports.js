import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import TopdealsCard from './Cards/TopDeals';
import SectionsHeading from './Cards/SectionsHeading';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../utils/urls';

function ShopebySports({productSection}) {
    const categoryData  = useSelector((state) => state.categoryData)
    const [sectionData, setsectionData] = useState([...categoryData?.categoryData?.filter((item) => {
        if (item?.product_section) {
            return item?.product_section?.product_section_name == "Shop by Sports"
        }
    })])


    // Use useEffect to filter and set the state when categoryData changes
    useEffect(() => {
        const filteredData = categoryData?.categoryData?.filter((item) => {
            return item?.product_section?.product_section_name === "Shop by Sports";
        });

        // Set the sectionData state with the filtered data
        setsectionData([...filteredData]);

    }, [categoryData]);


    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        autoplay: false,
        // className: "center",
        // centerMode: true,
        // // infinite: true,
        // centerPadding: "60px",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 1
                }
            }
        ]
    };


    return (
        <div className='container-fluid home-sections bg-light'>
            <SectionsHeading title={productSection?.product_section_name || "title"} subTitle={productSection?.description || "Visit our shop to see amazing creations from our Gym house"} />
            <div className='row'>
                <div className='col'>
                    <div className='row slider-cus-button'>
                        <Slider {...settings}>
                            {
                                productSection?.categories?.map((item, index) => {
                                    return (
                                        <div key={index} className='col-lg-2 col-md-4 p-3'>
                                            <a href={`/all-product?type=category&id=${item?.id}`}>
                                                <div className='goals-card'>
                                                <img src={baseUrl +"/"+ item?.image ||'assets/images/stars.png'} className='img-fluid category-image' alt='img' />
                                                    <div className='card-content'>
                                                            <h5>
                                                            {item?.name || "category name"}
                                                            </h5>
                                                        {/* <p>
                                                        {item?.item_count} items
                                                        </p> */}
                                                    </div>
                                                </div>
                                             </a>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopebySports