import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from "../../utils/urls";

function ProductImageSlide(images) {
    console.log(images,"<<<<<<<<deson" ,images?.images?.split(","))
    const isVisible = useState(true);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    
    // <div>
    //   <Slider {...settings}>
    //     {isVisible?.map((image ,index) => {
    //       return (
    //         <div key={index} className="img-contr">
    //               <img src={baseUrl + "/" + image} className="img-fluid" />
    //         </div>
    //       );
    //     })}
    //   </Slider>
    // </div>
    
    <div>
    {images && images?.images?.length > 0 ? (
      <Slider {...settings}>
        {images?.images?.split(",").map((imageUrl, index) => {
          return (
            <div key={index} className="min-slider-main">
              <div className="small-image-container">
                <img
                  src={baseUrl + "/" + imageUrl.trim()}
                  className="img-fluid"
                 
                  alt={`Image ${index + 1}`}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    ) : (
      ""
    )}
  </div>
  )
}

export default ProductImageSlide
