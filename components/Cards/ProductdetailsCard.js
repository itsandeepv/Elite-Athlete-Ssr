import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { getCartListCount } from "@redux/actions/CartListCountActions";
import StarRating from "@components/StarRating";
import { formatCurrency } from "@helpers/frontend";
import { baseUrl } from "@utils/urls";
import { useRouter } from "next/router";
import { getAddToCart } from "@redux/actions/addToCartActions";
import { openModal } from "@redux/actions/modalActions";
import PhotoSlider from "@components/Modal/PhotoSlider";


function ProductdetailsCard({ products, productReviewCount, setData }) {
  const router = useRouter();
  const urlParam = router.query;

  const { userData } = useSelector((state) => state);
  const { getCartListData } = useSelector((state) => state.getCartListData);
  const { getWishListData } = useSelector((state) => state.getWishListData);
  const productID = urlParam?.id||""
  const vrNID = urlParam?.vrN?.replace(/\+/g, ' ')||""
  // console.log("pr" ,urlParam);
  

  const [details, setDetails] = useState({...products});
  const [selectedAttribute, setSelectedAttribute] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const [showShare, setshowShare] = useState("false");

 
  const [isLoading, setisLoading] = useState(false);
  const [showWishListContent, setShowWishListContent] = useState();
  const [showAddToCartListContent, setShowAddToCartListContent] = useState("Add To Cart");
  const [ProductByVarientData, setProductByVarientData] = useState({
    ProductByVarientData: {}
  });
  const [isVisible, setIsVisible] = useState();
  const [quntity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  var settings = {
    dots: false,
    speed: 500,
    // infinite: true,
    margin: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
 
  const selectAndShowSliderImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };


  const cartData = {
    product_id: details?.id,
    product_name: details?.product_name,
    product_hcn: details?.product_hcn,
    product_image: details?.thumbnail,
    price: details?.price,
    qty: quntity,
    variant_id:
      details?.product_attribute_types?.length > 0
        ? ProductByVarientData.ProductByVarientData?.product_attributes_id
        : details?.product_attributes_id ? details?.product_attributes_id : "",
    old_price: details?.old_price,
    discount: details?.discount,
  };

  // console.log(details , "<<<<<<<<details");
  const config = {
    method: "post",
    token: userData?.token,
    headers: {
      Authorization: `Bearer ${userData?.token}`,
    },
  };

  const addToWishListItem = () => {
    if (userData?.token) {
      if (showWishListContent === "Go To Wishlist") {
        window.location = "/wish-list";
        // router.push("/wish-list")
      } else {
        const data = {
          product_id: details?.id,
          variant_id:
            details?.product_attribute_types?.length > 0
              ? ProductByVarientData.ProductByVarientData?.product_attributes_id
              : "",
        };
        dispatch(
          getAddToCart(
            config,
            "/api/add-item-to-user-wishlist",
            data,
            "wishlist",
            setisLoading
          )
        );
      }
    } else {
      dispatch(openModal('Signin', {}));
    }
  };

  const addToCartItem = () => {
    if (userData?.token) {
      dispatch(
        getAddToCart(
          config,
          "/api/add-to-cart",
          cartData,
          "addToCart",
          setisLoading,
          setShowAddToCartListContent
        )
      );
      // setShowAddToCartListContent('Go To Cart');
      if (showAddToCartListContent === "Go To Cart") {
        window.location = "/cart";
      }
    } else {
      var cookieValueNew = Cookies?.get("addToCartData");
      if (cookieValueNew !== undefined && cookieValueNew !== "undefined") {
        var addToCartData = JSON.parse(cookieValueNew);
        const foundRepeatProduct = addToCartData.find(
          (item) => item.product_id === details.id
        );
        if (!foundRepeatProduct) {
          // Check if product is not already in the cart
          const cartDataArray = [...addToCartData, cartData];
          Cookies.set("addToCartData", JSON.stringify(cartDataArray));
          Cookies.set("cartLength", cartDataArray.length.toString());
        }
        setShowAddToCartListContent("Go To Cart");
        if (showAddToCartListContent === "Go To Cart") {
          dispatch(openModal('Signin', {}));
          // navigate(`${window.location?.pathname + window.location?.search}`, {
          //   state: { popName: "Sigin" },
          // });
        }
      } else {
        const cartDataArray = [cartData];
        Cookies.set("addToCartData", JSON.stringify(cartDataArray));
        Cookies.set("cartLength", cartDataArray.length.toString());
        setShowAddToCartListContent("Go To Cart");
        if (showAddToCartListContent === "Go To Cart") {
          dispatch(openModal('Signin', {}));
       
        }
      }
    }
  };

  const showProductByVarient = (data) => {
    setisLoading(true)
    const dataFor = new FormData()
    dataFor.append("product_id", data?.product_id)
    data?.attribute_name?.split("\",\"")?.map((item) => {
      dataFor.append("attribute_name[]", item)
    })

    axios.request({
      ...config,
      url: `${baseUrl}/api/get-single-product-variant`,
      method: 'post',
      data: dataFor,
    })
      .then((response) => {
        if (setisLoading) { setisLoading(false) }
        if (response.data?.responseCode === 200) {
          let data = response.data.result
          // console.log(details , "<<<<<<<images" ,data);
          setData((preS) => ({
            ...preS, ...data , images:  data?.images ? data?.images +  (details?.images ? "," + details?.images : "") : details?.images
          }))
          //priya's cond ...preS, ...data ,images: (data?.images === '' || data?.images === null) ? preS?.galleryImg:data?.images +  (preS?.galleryImg ? "," + preS?.galleryImg : "")
          setDetails((preS) => ({ ...preS, ...data ,images:  data?.images ? data?.images +  (details?.images ? "," + details?.images : "") : details?.images}))
          ProductByVarientData.ProductByVarientData = response.data.result
        } 
      })
      .catch((error) => {
        if (setisLoading) { setisLoading(false) }
        toast.error('An error occurred. Please try again.');
      });
  };

  useEffect(() => {
    if (details?.thumbnail) {
      setSelectedImage(details.thumbnail);
    }
  }, [details]);

  useEffect(() => {
    setDetails({ ...products });
  }, [products]);

  useEffect(() => {
    if (details?.product_attribute_types?.length > 0) {
      const { product_attributes_id, quantity, } = ProductByVarientData.ProductByVarientData;
      if (ProductByVarientData?.ProductByVarientData?.result == "Not found") {
        setDetails({
          ...details,
        });
      } else {
        setDetails({
          ...details, quantity: quantity,
          ...ProductByVarientData.ProductByVarientData,
          product_attributes_id: ProductByVarientData.ProductByVarientData?.product_attributes_id,
        });
      }
    }
    // console.log(ProductByVarientData ,details, "<<<<<ProductByVarientData");
  }, [ProductByVarientData]);


  const handleVarientSelection = (vrNIDA) => {
    if (selectedAttribute) {
      const data = {
        product_id: productID,
        attribute_name: vrNIDA ? vrNIDA :  selectedAttribute
      };
      showProductByVarient(data); // if (actiontype == "ltr" || actiontype == "Packet") {
    }
  };
  useEffect(() => {
    handleVarientSelection();
  }, [selectedAttribute]);
  
  const urlChange = ()=>{}
  const [varientList, setvarientList] = useState([]);
  const fetchVerientList = async () => {
    await axios
      .get(baseUrl + "/api/get-all-attributes")
      .then((res) => {
        if (res.data?.responseCode == 200) {
          setvarientList(res?.data?.result);
        }
      })
      .catch((err) => {
        console.log(err, "<<<<");
      });
  };

  useEffect(() => {
    fetchVerientList();
  }, []);

  useEffect(() => {
    if (details?.combination?.length > 0) {
      if(vrNID){
        setSelectedAttribute(vrNID)
      }else{
        setSelectedAttribute(details?.combination[0]?.attribute_name)
      }
    }
  }, [varientList ,urlChange]);

  useEffect(() => {
    setQuantity(Number(details?.quantity) === 0 ? 0 : 1);
    const cookieValue = Cookies?.get("addToCartData");
    if (cookieValue) {
      try {
        const addToCartData = JSON.parse(cookieValue);
        if (details && addToCartData && addToCartData[0]?.product_id) {
          const foundProduct = addToCartData.find(
            (item) => item.product_id === details.id
          );
          if (foundProduct) {
            setShowAddToCartListContent("Go To Cart");
            return;
          }
        }
      } catch (error) {
        // console.error("Error parsing cookie:", error);
      }
    }

    if (details && getCartListData && getCartListData.cart_list) {
      const foundProduct = getCartListData.cart_list.find((item) =>
        item?.variant_id
          ? item.product_id == details.id &&
          item.variant_id ==
          ProductByVarientData.ProductByVarientData?.product_attributes_id
          : item.product_id == details.id
      );
      if (foundProduct) {
        setShowAddToCartListContent("Go To Cart");
      } else {
        setShowAddToCartListContent("Add To Cart");
      }
    }
  }, [details, getCartListData, ProductByVarientData.ProductByVarientData]);

  const [wishlistid, setwishlistid] = useState()
  useEffect(() => {
    if (getWishListData) {
      const foundWishProduct = getWishListData.find((item) =>
        item?.variant_id
          ? item.product_id == details.id &&
          item.variant_id ==
          ProductByVarientData.ProductByVarientData?.product_attributes_id
          : item?.product_id == details.id
      );
      // console.log(foundWishProduct, getWishListData, "<<<<<<<<<getWishListData");
      if (foundWishProduct) {
        setShowWishListContent("Wishlisted");
        setwishlistid(foundWishProduct?.wishlist_id)
      } else {
        setShowWishListContent("Wishlist");
      }
    }
  }, [getWishListData, details, ProductByVarientData.ProductByVarientData]);

  const itemUrl = `${window.location?.pathname}${window.location?.search}`;
  function moveElementToFront(array, element) {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
      array.unshift(element);
    }
    return array;
  }



  const deleteToWishList = (id) => {
    // if(setisLoading){setisLoading(true)}
    setisLoading(true)
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: baseUrl + "/api/delete-item-from-user-wishlist/" + wishlistid,
      headers: {
        Authorization: `Bearer ${userData?.token}`,
      },
      data: { whistlist_id: wishlistid },
    };
    axios
      .request(config)
      .then((response) => {
        // if(response.data?.re)
        if (response.data?.responseCode == 200) {
          // if(setisLoading){
          setisLoading(false)
          dispatch(
            getCartListCount(
              `/api/get-user-wishlist`,
              userData?.token,
              "WishListSuccess"
            )
          );
          dispatch(
            getCartListCount(
              `/api/get-user-wishlist-count`,
              userData?.token,
              "CartWishListCountSuccess"
            )
          );
        } else {
          setisLoading(false)
          // if(setisLoading){setisLoading(false)}
          // toast.error(response.data?.result)
        }
      })
      .catch((error) => {
        setisLoading(false)
        // if(setisLoading){setisLoading(false)}
        toast.error(error?.response?.data?.message || "");
      });
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const silderRef = useRef(null)
  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      var activeItem = document.querySelector('.wrapped-label .activeForS');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth', // Scroll smoothly
          block: 'nearest',   // Scroll to the nearest edge (or use 'start', 'center', 'end' as per your needs)
          inline: 'nearest'        // Scroll so that the item is centered in the view
        });
      }
    }, 50);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  },[details ,products])



  return (
    <div className="row mb-3">
      <div className="col-lg-6">
        <div className="py-2">
          <div
            className="image-box2">         
            {
              details.images?.length == 0 || !details?.images ?
              <Slider {...settings2} ref={silderRef}>
                {details?.thumbnail?.split(",").map((imageUrl, index) => {
                  // console.log(imageUrl, "<<<<<<<imageUrl");
                  return (
                    <div style={details.images?.split(",")?.length == 1 ? { display: "block!important" } : {}} className="imgsss" >
                      <img
                        style={{ maxHeight: "400px" }}
                        onClick={() => {
                          // console.log("details" ,details);
                          const findimgArr = details.thumbnail.split(",")?.map((item) => item?.trim());
                          moveElementToFront(findimgArr, imageUrl);
                          setIsVisible(moveElementToFront(findimgArr, imageUrl));
                          // console.log("asdfasdf", details.images ,moveElementToFront(findimgArr, imageUrl));
                        }}
                        src={baseUrl + "/" + imageUrl.trim()}
                        className="img-fluid"
                        
                        alt={details?.product_name}
                      />
                    </div>

                  );
                })}
              </Slider>  :
              <Slider {...settings2} ref={silderRef}>
                {/* {[details?.thumbnail ,...details?.images?.split(",")]?.map((imageUrl, index) => { */}
                {details?.images?.split(",").map((imageUrl, index) => {
                  // console.log(imageUrl, "<<<<<<<imageUrl");
                  return (
                    <div style={details.images?.split(",")?.length == 1 ? { display: "block!important" } : {}} className="imgsss" >
                      <img
                        style={{ maxHeight: "400px" }}
                        onClick={() => {
                          const findimgArr = details.images
                            .split(",")
                            ?.map((item) => item?.trim());
                          moveElementToFront(findimgArr, imageUrl);
                          setIsVisible(moveElementToFront(findimgArr, imageUrl));
                          // console.log("asdfasdf", details.images ,moveElementToFront(findimgArr, imageUrl));
                        }}
                        src={baseUrl + "/" + imageUrl.trim()}
                        className="img-fluid"
                        alt={details?.product_name}
                      />
                    </div>

                  );
                })}
              </Slider>
            }
          </div>
          {isVisible && (
            <PhotoSlider setIsVisible={setIsVisible} isVisible={isVisible} />
          )}
          <div className="min-slider-container product-det-slider">
            {details?.images && details.images.split(",").length > 1 ? (
              <Slider {...settings}>
                {details?.images?.split(",").map((imageUrl, index) => {
                  // console.log(details?.images?.split(",") , "<<<<<<<details?.images?.split(",")" ,details?.images);
                  return (
                    <div key={index} className="min-slider-main">
                      <div className="small-image-container">
                        <img
                          src={baseUrl + "/" + imageUrl.trim()}
                          className="img-fluid"
                          onClick={() => {
                            selectAndShowSliderImage(imageUrl.trim())
                            silderRef.current.slickGoTo(index)
                          }
                          }
                          alt={details?.product_name}
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

        </div>
        {/* product_attribute_types */}
      </div>
      <div className="col-lg-6 right-details ">

        {isLoading ?
          <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "230px" }}>
            <svg viewBox="0 0 38 38" width="40" height="40" stroke="#000">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".25" cx="18" cy="18" r="18"></circle>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"
                      repeatCount="indefinite"></animateTransform>
                  </path>
                </g>
              </g>
            </svg>
          </div>
          // ""
          :
          <div className="product-details-container position-relative">
            <h4>
              {details?.product_name} -{" "}
              {details?.product_attribute_types?.length > 0 &&
                ProductByVarientData.ProductByVarientData?.attribute_name
                ? "(" +
                ProductByVarientData.ProductByVarientData?.attribute_name +
                ")"
                : ""}
            </h4>
            <button
              className="share-prod"
              onClick={() => {
                setshowShare(!showShare);
              }}
            >
              <i className="fa-solid fa-share"></i>
            </button>
            <div className={`share-platforms ${showShare ? "show-share" : ""}`}>
              <ul>
                <li
                  onClick={() => {
                    const url = `https://www.instagram.com/?url=${publicUrl}${itemUrl}`;
                    window.open(url, "_blank");
                  }}
                >
                  {/* <a href="#" */}
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </li>
                <li
                  onClick={() => {
                    const url = `whatsapp://send?text=Check out this product: ${details?.product_name} - ${publicUrl}${itemUrl}`;
                    window.location.href = url;
                  }}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Whatsapp</span>
                </li>
                <li
                  onClick={() => {
                    const url = `https://www.facebook.com/sharer/sharer.php?u=${publicUrl}${itemUrl}`;
                    window.open(url, "_blank");
                  }}
                >
                  {/* <i className="fa-brands fa-x-twitter"></i> */}
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  <span>Facebook</span>
                </li>
              </ul>
            </div>

            {details?.brand_name && (
              <p className="gray bold-600">Brand: {details?.brand_name?.name}</p>
            )}
            {
              productReviewCount == "0" ? "" :
                <StarRating
                  productReviewCount={productReviewCount}
                  averageRatio={details?.avg_rating}
                />

            }
            <p className="commen-text commen-text-dan mt-0 pt-0">
              <div
                dangerouslySetInnerHTML={{ __html: details?.short_description }}
              ></div>
            </p>

            {
              details?.combination?.length > 0 &&
              <>
                <h6>Select Product Varient</h6>
                <ul className="d-flex p-0 m-0 gap-3 wrapped-label">
                  {details?.combination?.map((attribute, index) => {
                    const checkQuntity = products?.combination.find((el) => el?.attribute_name == attribute?.attr_val)
                    return (
                      <li key={index} id={`item${index}`} className={`${selectedAttribute == attribute.attribute_name
                        ? "activeForS"
                        : ""}`}>
                        <button
                          // style={selectedAttribute?.[
                          //   `${item?.title}_attr_val${indexV}`
                          // ] === attribute.attr_val ?{border: "2px solid #5a0563 !important;"}:{}
                          // }
                          className={`quantity-btn ${attribute?.quantity == "0" ? " btn-disabled " : " "} ${vrNID == attribute.attribute_name ? "active" : "" }`}
                          onClick={() => {
                            window.location = `/product-details/${productID}/${attribute?.attribute_name}`
                            setSelectedAttribute(attribute?.attribute_name);
                          }}
                        >
                          {attribute?.attribute_name}
                        </button>
                      </li>
                    )
                  }
                  )}
                </ul>
              </>
            }


            <div className="d-flex gap-5">
              {details?.discount > 0 && (
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#388e3c",
                  }}
                >
                  {parseInt(details?.discount)}% off
                </span>
              )}
              {details?.discounted_price > 0 && (
                <span>
                  {" "}
                  Saved {formatCurrency(Number(details?.discounted_price))}{" "}
                </span>
              )}
            </div>
            <div className="d-flex align-items-center w-100 justify-content-between">
              <h4 className="d-flex align-items-baseline gap-2">
                {details?.discount && parseInt(details?.discount) > 0 ? (
                  <>
                    {quntity === 0 ? (
                      <span>{formatCurrency(Number(details?.price))}</span>
                    ) : (
                      <span>{formatCurrency(Number(details?.price * Number(quntity || "")))}</span>
                    )}
                    {/* <small
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    {formatCurrency(
                      Number(details?.price * Number(quntity || ""))
                    )}
                  </small> */}
                  </>
                ) : (
                  <>
                    {quntity === 0 ? (
                      <span>{formatCurrency(Number(details?.price))}</span>
                    ) : (

                      <span>{formatCurrency(Number(details?.price * Number(quntity || "")))}</span>
                    )}
                  </>
                )}
              </h4>
              {details?.old_price > 0 && (details?.old_price != details?.price) ? (
                <>
                  <span style={{ textDecoration: "line-through", color: "red" }}>
                    {" "}
                    {formatCurrency(Number(details?.old_price))}
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#388e3c",
                    }}
                  >
                    {/* {parseInt(details?.discount)}% off */}
                  </span>
                </>
              ) : null}

              {details?.stock_visibility_state != "hide" && (
                <p className="light-red bold-600">
                  {" "}
                  {/* ({" "}
                {ProductByVarientData.ProductByVarientData?.quantity
                  ? ProductByVarientData.ProductByVarientData?.quantity
                  : details?.low_stock_quantity}{" "}
                {details?.stock_visibility_state} in stock) */}
                </p>
              )}

              {Number(details?.quantity) === 0 ? (
                <p style={{ color: "red" }}>Out of stock</p>
              ) : (
                Number(quntity) == Number(details?.quantity) || Number(details?.quantity) <= 5 ? (
                  <p style={{ color: "red" }}>{details?.quantity} {Number(details?.quantity) == 1 ? "Item" : "Items"} Left Only</p>
                ) : (
                  ''
                )
              )}
            </div>
            <div className="d-flex gap-3 align-items-center ovf-scr">
              {Number(details?.quantity) !== 0 && (Number(details?.price) !== 0) && (
                <>
                  {showAddToCartListContent !== "Go To Cart" && (
                    <div className="enter-quntity d-flex gap-2">
                      <div className="quntity-arrow-btns">
                        <i
                          className="fa-solid fa-minus"
                          onClick={() => {
                            if (quntity > 1) {
                              setQuantity(quntity - 1);
                            }
                          }}
                        ></i>
                      </div>
                      <input
                        type="number"
                        placeholder="1"
                        defaultValue={1}
                        value={quntity}
                      />
                      <div className="quntity-arrow-btns">
                        <i
                          className="fa-solid fa-plus"
                          onClick={() => {
                            if (quntity < details?.quantity) {
                              setQuantity(quntity + 1);
                            }
                          }}
                        ></i>
                      </div>
                    </div>
                  )}
                </>

              )}


            </div>
            <div className="d-flex justify-content-between">
              {Number(details?.quantity) !== 0 && (Number(details?.price) !== 0) &&
                <button
                  className="c-btn bg-voilet text-light d-flex align-items-center gap-3 m-0"
                  onClick={addToCartItem} >
                  <i className="fa-solid fa-cart-shopping"></i>

                  {showAddToCartListContent}
                </button>
              }
              <button
                className={`c-btn m-0  ${showWishListContent == "Wishlisted" ? " bg-voilet text-light" : "bg-light"}   d-flex align-items-center gap-3`}
                onClick={() => {
                  if (showWishListContent == "Wishlisted") {
                    deleteToWishList()
                  } else {
                    addToWishListItem();
                  }
                }}
              >
                <i className="fa-solid fa-heart"></i>
                {showWishListContent}
              </button>

            </div>
          </div>

        }
      </div>

    </div>
  );
}

export default ProductdetailsCard;
