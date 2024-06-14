import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import TopdealsCard from './Cards/TopDeals';
import SectionsHeading from './Cards/SectionsHeading';
import axios from 'axios';
import { baseUrl } from '../utils/urls';

function TopdealSection({topdealdata}) {

    const [data, setData] = useState(topdealdata ||[])
    // console.log(topdealdata , "<<<<<<<topdealdata");
   
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
          // productSection?.categories?.length < 5 ? 3 :,
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='container-fluid home-sections'>
            <div className='row'>
                <SectionsHeading title="Top Deals" />
                <Slider {...settings}>
                    {
                        data?.map((item, index) => {
                            return (
                                <div className='col-lg-6' key={index}>
                                    <TopdealsCard details={item} />
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        </div>
    )
}

export default TopdealSection