import React from 'react';
import Slider from 'react-slick';
import SectionsHeading from './Cards/SectionsHeading';
import { baseUrl } from '../utils/urls';

const duplicateItems = (items, slidesToShow) => {
    const itemsCount = items.length;
    if (itemsCount >= slidesToShow) return items;

    const duplicatedItems = [];
    while (duplicatedItems.length < slidesToShow) {
        duplicatedItems.push(...items);
    }
    return duplicatedItems.slice(0, slidesToShow);
};

function ShopebyGoal({ productSection }) {
    const slidesToShow = 5;
    const categories = productSection?.categories ? duplicateItems(productSection.categories, slidesToShow) : [];
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <div className='container-fluid home-sections bg-light'>
            <SectionsHeading 
                title={productSection?.product_section_name || "title"} 
                subTitle={productSection?.description || "Visit our shop to see amazing creations from our Gym house"} 
            />
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <Slider {...settings}>
                            {categories.map((item, index) => (
                                <div key={index} className='col-lg-2 col-md-4 p-3'>
                                    <a href={`/all-product?type=category&id=${item?.id}`}>
                                        <div className='goals-card'>
                                            <img 
                                                src={baseUrl + "/" + (item?.image || 'assets/images/stars.png')} 
                                                className='img-fluid category-image' 
                                                alt='img' 
                                            />
                                            <div className='card-content'>
                                                <h5>{item?.name || "category name"}</h5>
                                                <p>
                                                    {/* {item?.item_count} */}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopebyGoal;
