import React from 'react'
import Slider from 'react-slick';
import TopdealsCard from './Cards/TopDeals';
import SectionsHeading from './Cards/SectionsHeading';
import SportsCards from './Cards/SportsCards';

function ShopebyGoal() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const topArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container-fluid home-sections bg-light'>
            <SectionsHeading title="Shop by goal" subTitle="Visit our shop to see amazing creations from our Gym house" />
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <Slider {...settings}>
                            {
                                topArray?.map((item, index) => {
                                    return (
                                        <div key={index} className='col-lg-2 col-md-4 p-3'>
                                            <div className='goals-card'>
                                                <img src='assets/images/stars.png' className='img-fluid category-image' alt='img' />
                                                <div className='card-content'>
                                                    <h5>Weight Lose</h5>
                                                    <p>
                                                        50 Items
                                                    </p>
                                                </div>
                                            </div>
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

export default ShopebyGoal