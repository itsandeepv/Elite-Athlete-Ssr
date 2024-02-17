import React from 'react'
import Slider from 'react-slick';
import TopdealsCard from './Cards/TopDeals';
import SectionsHeading from './Cards/SectionsHeading';

function TopdealSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
    const topArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container-fluid home-sections'>
            <div className='row'>
                <SectionsHeading title="Top Deals" subTitle="Visit our shop to see amazing creations from our Gym house" />
                <div className='col'>
                    <Slider {...settings}>
                        {
                            topArray?.map((item) => {
                                return (
                                    <TopdealsCard />
                                )
                            })
                        } 
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TopdealSection