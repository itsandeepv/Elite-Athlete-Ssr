import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import Login from '@components/Modal/Login';
import { getCartListCount } from '@redux/actions/CartListCountActions';
import { getUserdata } from '@redux/actions/userDataActions';
import { baseUrl } from '@utils/urls';
import { fetchSuccess } from '@redux/actions/userAuthActions';
import { showPopup } from '@redux/actions/popupActions';
import SignUp from '@components/Modal/SignUp';
import ResetPassword from '@components/Modal/ResetPassword';
import { openModal, showModal } from '@redux/actions/modalActions';
import Link from 'next/link';
import { BASE_URL } from '@constants/Common';

function Header() {
  const router = useRouter();
  const { userData, userData2 } = useSelector((state) => state)
  const { categoryData } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [showPop, setShowpopup] = useState(false)
  const [cartCount, setCartCount] = useState()
  const [showProfile, setShowprofile] = useState(false)
  const [openSidebar, setopenSidebar] = useState(false)
  const { cartListCountData } = useSelector((state) => state.cartListCountData)
  const { cartWishListCountData } = useSelector((state) => state?.cartWishListCountData)
  const [loading, setLoading] = useState(false);
  const [serachKeyName, setserachKeyName] = useState();
  const { modalData } = useSelector((state) => state)

  // console.log("popUpData" ,modalData );
  const handleProductChange = (event) => {
    // const selectedValue = event.target.value;
    window.location = `/all-product/category/${event?.id}/${event?.name}`;
  };

  useEffect(() => {
    if (userData?.token) {
      dispatch(getCartListCount(`/api/get-cart-list-count`, userData?.token, "CartListCountSuccess"));
      dispatch(getCartListCount(`/api/get-user-wishlist-count`, userData?.token, "CartWishListCountSuccess"));
    }
    if (Cookies.get('cartLength')) {
      setCartCount(Cookies.get('cartLength'))
    }

  }, [loading, cartCount]);


  const [searchSuggestionsData, setsearchSuggestions] = useState([])
  const [searchvalue, setsearchvalue] = useState("")
  const searchSuggestions = async (e) => {
    setsearchvalue(e.target.value)
    // console.log(searchvalue, e.target.value);
    if (e.target.value.length >= 1) {
      await axios.get(`${baseUrl}/api/suggest-product?query=${e.target.value}`).then((res) => {
        if (res?.status == 200) {
          setsearchSuggestions(res?.data?.data)
          setserachKeyName(res?.data?.name)
        }

      }).catch((err) => {
        console.log(err);
      })
    }
  }

  useEffect(() => {
    if (userData?.token) {
      dispatch(getUserdata(userData?.token))
    }
  }, [])

  return (
    <React.Fragment>
      {openSidebar && <Sidebar setopenSidebar={setopenSidebar} />}
      <header className="py-2">
        <div className="container-fluid">
          <div className="left">
            <a href="/"><img src={BASE_URL + "/assets/icons/logo.svg"} alt="logo" width={"72px"} /></a>

          </div>
          <div className="middle">
            <img src={BASE_URL + "/assets/icons/hamburger.svg"} onClick={() => { setopenSidebar(true) }} alt="img" className="hamburger" />
            <div className="search-container">
              <i className="fa-solid fa-magnifying-glass serchc"></i>
              <select onChange={(event) => {
                const selectedItem = categoryData?.categoryData?.find(
                  (item) => item.id === parseInt(event.target.value)
                );
                if (selectedItem) {
                  handleProductChange(selectedItem);
                }
              }}>
                <option value='' selected disabled>All Categories</option>
                {categoryData?.categoryData?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
              <div className='sugges_search' >
                <input type="search" onKeyPress={(e) => {
                  if (e.key == "Enter" && searchSuggestionsData.length > 0) {
                    window.location = `/all-product/${serachKeyName}/${searchSuggestionsData[0]?.id}/${searchSuggestionsData[0]?.name}`
                  }
                }} onChange={(e) => {
                  searchSuggestions(e)
                }} placeholder="I’m shopping for..." />
                {
                  searchvalue != "" &&
                  <ul className='sugges_dev'>
                    {
                      searchSuggestionsData?.length > 0 ?
                        searchSuggestionsData?.map((item, index) => {
                          // console.log("categoryName" ,item);
                          return (
                            <li className='cursor-pointer' key={index} onClick={() => {
                              // console.log(item, serachKeyName);
                              window.location = `/all-product/${serachKeyName}/${item?.id}/${item?.name}`
                            }} >
                              <p> {item?.name || ""}</p>
                            </li>
                          )
                        }) : <li>Item Not found</li>
                    }
                  </ul>
                }
              </div>
            </div>
          </div>

          <div className="right">

            <a onClick={() => {
              if (userData.token) {
                window.location = "/cart"
              } else {
                dispatch(openModal('Signin', {}));
              }
            }}>
              <i className="fa-solid fa-cart-shopping"></i>
              {userData.token && Number(cartListCountData) > 0 ? (
                <span>{cartListCountData}</span>
              ) : (
                Number(cartCount) > 0 ? <span>{cartCount}</span> : ""
              )}
            </a>

            <a onClick={() => {
              if (userData.token) {
                window.location = "/wish-list"
              } else {
                dispatch(openModal('Signin', {}));
              }
            }}>
              <i className="fa-solid fa-heart"></i>
              {userData.token && Number(cartWishListCountData) > 0 ? (
                <span> {cartWishListCountData}</span>
              ) : ""}
            </a>
            {userData.token ?
              <a onClick={() => {
                setShowprofile(!showProfile)
              }} className="sign-in"><i className="fa-solid fa-user"></i> <i className="fa-solid fa-chevron-down"></i></a> :
              <a onClick={() => {
                dispatch(openModal('Signin', {}));
              }} className="sign-in"><i className="fa-solid fa-user"></i> </a>
            }
          </div>
        </div>
        <div className={`profile-menu ${showProfile ? "show-profile" : ""} `}>
          <div className="name-num">
            <p className="name">Hello <span>
              {userData2?.data?.name || ""}
            </span></p>
            <p>+91 {userData2?.data?.phone}</p>
          </div>
          <div className="items">

            <Link href="/wish-list"><img src={BASE_URL + "/assets/icons/menu1.svg"} alt="img" /> Wishlist</Link>
            <Link href='/order-history' ><img src={BASE_URL + "/assets/icons/menu2.svg"} alt="img" /> Order</Link>
            <Link href="/user-dashboard"><img src={BASE_URL + "/assets/icons/menu3.svg"} alt="img" /> Edit Profile</Link>
            <a
              onClick={() => {
                dispatch(fetchSuccess({ user: "", token: "" }))
                window.location = "/"
              }}
            ><img src={BASE_URL + "/assets/icons/menu4.svg"} alt="img" /> Logout</a>
          </div>
        </div>
        <div className="blank"></div>
      </header>
      {
        (modalData.modalName == "Signin" && !userData.token) &&
        <Login setShowpopup={setShowpopup} />
      }
      {
        (modalData.modalName == "Signup" && !userData.token) &&
        <SignUp setShowpopup={setShowpopup} />}
      {
        modalData.modalName == "forgotPassword" &&
        <ResetPassword setShowpopup={setShowpopup} />
      }

    </React.Fragment>
  );
}

export default Header;
