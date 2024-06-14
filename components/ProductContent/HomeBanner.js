import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import { baseUrl } from '../../utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { getcategory } from '../../redux/actions/categoryActions';
import Loader from '@components/Modal/Loader';
function HomeBanner() {

  const dispatch = useDispatch()
  const { categoryData } = useSelector((state) => state)
  const [loading, setLoading] = useState(false);
  const [silderData, setSetsliderData] = useState([])
  const [silderleftData, setSetleftsliderData] = useState([])
  const slideRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollPrev = () => {
    const container = slideRef.current;
    const innerItems = container.querySelectorAll('.inner-items'); // Adjust the selector
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevItem = innerItems[currentIndex - 1];
      container.scrollTo({
        top: prevItem?.offsetTop || 0,
        left: prevItem?.offsetLeft,
        behavior: 'smooth',
      });
    }
  };
  const scrollNext = () => {
    const container = slideRef.current;
    const innerItems = container.querySelectorAll('.inner-items'); // Adjust the selector
    // Find the index of the next item based on the current scroll position
    if (currentIndex < innerItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const nextItem = innerItems[currentIndex + 1];
      container.scrollTo({
        top: nextItem.offsetTop,
        left: nextItem.offsetLeft,
        behavior: 'smooth',
      });
    }
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  const [isfeaturedCategory, setisfeaturedCategory] = useState()
  useEffect(() => {
    const fetchData = async () => {
       setLoading(true);
      await axios.get(`${baseUrl}/api/get-slider`).then((res) => {
        if (res.status == 200) {
          setSetsliderData(res.data.result)
          setSetleftsliderData(res.data.result?.filter((item) => item.slider_position == "left"))
          setLoading(false);
        }
      }).catch((err) => { console.log(err);setLoading(false); })
    }
    const fetchIconData = async () => {
      setLoading(true);
     await axios.get(`${baseUrl}/api/get-all-categories-by-feature`).then((res) => {
       if (res.status === 200) {
        setisfeaturedCategory(res.data.result?.filter((item) => item?.is_featured == "1"))
       }
     }).catch((err) => { console.log(err);})
   }
    dispatch(getcategory("/api/get-all-categories"))
    fetchData()
    fetchIconData()
  }, [])

  return (

    <React.Fragment>
        {loading &&
              <Loader />}

    <div className="home-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 first-slider-home">
          
              <Slider {...settings}>
                {
                  silderleftData.length > 0 && silderleftData?.map((item, index) => {
                    // console.log(item , "<<<<itemitem");
                    return (
                      <div key={index} className='col-lg-2 col-md-4'>
                        <div className='goals-card' onClick={()=>{
                          window.location = item?.slider_url || "#"
                        }}>
                          <img src={baseUrl + "/" + item.slider_image} className='img-fluid category-image' alt='img' />
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>
              <div className="under-slider">
                <div className="one">
                  <p><img src="assets/images/home-banner/shop.svg" alt="img" /> <span>Free Shipping</span></p>
                  <p>Free shipping for workout supplements on orders over ₹2000.</p>
                </div>
                <div className="one">
                  <p><img src="assets/images/home-banner/shirt.png" alt="img" /> <span>Authenticity Guaranteed</span></p>
                  <p>Guaranteed Authentic Supplements for Serious Fitness Enthusiasts.</p>
                </div>
                <div className="one">
                  <p><img src="assets/images/home-banner/rs.svg" alt="img" /> <span>Secure Payment</span></p>
                  <p>Secure, fast, and reliable payment options .</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 second-sec">
              <Slider {...settings}>
                {silderData?.filter((item) => item.slider_position === "right").map((item, index) => (
                  <img key={index} onClick={()=>{
                    // console.log(item , "<<<<item");
                    window.location = item?.slider_url||"#"
                  }} src={baseUrl + "/" + item?.slider_image} alt="img" style={{ maxHeight: "555px" }} />
                ))}
              </Slider>
            </div>

            <div className="col-lg-1 slider-ver">
              <div className="arrow top-arrow" onClick={() => scrollPrev()}>
                <img src="assets/images/home-banner/arrow.svg" alt="arrow" />
              </div>
              <div className="vertical-slide" ref={slideRef}>
                {
                  isfeaturedCategory?.map((item, index) => {
                    return (
                      <div className="inner-items" key={index}>
                        <a href={`/all-product?type=category&id=${item?.id}`}>
                          <img src={baseUrl + "/" + item?.icon} alt="img" />
                          <p>{item?.name}</p>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
              <div className="arrow bottom-arrow" onClick={() => scrollNext()}>
                <img src="assets/images/home-banner/arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default HomeBanner
