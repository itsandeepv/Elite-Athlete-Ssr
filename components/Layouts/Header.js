import React, { useState, useEffect } from 'react';
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import ResetPassword from "../Modal/ResetPassword";
import { fetchSuccess } from "../../redux/actions/userAuthActions";
// import { useLocation, useNavigate } from "react-router-dom";
import { getCartListCount } from '../../redux/actions/CartListCountActions';
import Cookies from 'js-cookie';
import axios from 'axios';
import { getUserdata } from '../../redux/actions/userDataActions';

function Header() {

  const { userData, userData2 } = useSelector((state) => state)
  const { categoryData } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [showPop, setShowpopup] = useState(false)
  const [cartCount, setCartCount] = useState()
  const [showProfile, setShowprofile] = useState(false)
  const [openSidebar, setopenSidebar] = useState(false)
  const navigate = ()=>{}
  const { state } = ()=>{}
  const { cartListCountData } = useSelector((state) => state.cartListCountData)
  const { cartWishListCountData } = useSelector((state) => state?.cartWishListCountData)
  const [loading, setLoading] = useState(false);
  const [serachKeyName, setserachKeyName] = useState();
  const { popUpData } = useSelector((state) => state)

  const handleProductChange = (event) => {
    const selectedValue = event.target.value;
    window.location = `/all-product?type=category&id=${selectedValue}`;
  };

  useEffect(() => {
    if (userData?.token) {
      dispatch(getCartListCount(`/api/get-cart-list-count`, userData?.token, "CartListCountSuccess"));
      dispatch(getCartListCount(`/api/get-user-wishlist-count`, userData?.token, "CartWishListCountSuccess"));
    }
    if (Cookies.get('cartLength')) {
      setCartCount(Cookies.get('cartLength'))
      // console.log(cartCount, Cookies.get('cartLength'));
    }

  }, [loading, cartCount]);


  const [searchSuggestionsData, setsearchSuggestions] = useState([])
  const [searchvalue, setsearchvalue] = useState("")
  const searchSuggestions = async (e) => {
    setsearchvalue(e.target.value)
    console.log(searchvalue, e.target.value);
    if (e.target.value.length >= 2) {
      await axios.get(`https://ean.gocoolcare.com/api/suggest-product?query=${e.target.value}`).then((res) => {
        // console.log("res?.data>>>>>>>>", res?.data);
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
    if(userData?.token){
      dispatch(getUserdata(userData?.token))
    }
  }, [])

  // console.log(userData2, "<<<<<userData2");

  return (
    <React.Fragment>
      {openSidebar && <Sidebar setopenSidebar={setopenSidebar} />}
      <header className="py-2">
        <div className="container-fluid">
          <div className="left">
            <a href="/"><img src="assets/icons/logo.svg" alt="logo" width={"72px"} /></a>
          </div>
          <div className="middle">
            <img src="assets/icons/hamburger.svg" onClick={() => { setopenSidebar(true) }} alt="img" className="hamburger" />
            <div className="search-container">
              {/* <i className="fa-solid fa-magnifying-glass serchc"></i> */}
              <select onChange={handleProductChange}>
                <option value='' selected disabled>All Categories</option>
                {categoryData?.categoryData?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
              <div className='sugges_search' >
                <input type="search" onChange={(e) => {
                  searchSuggestions(e)
                }} placeholder="I’m shopping for..." />
                {
                  searchvalue != "" &&
                  <ul className='sugges_dev'>
                    {
                      searchSuggestionsData?.length > 0 ?
                        searchSuggestionsData?.map((item, index) => {
                          // console.log(item , "<<<<<");
                          return (
                            <li className='cursor-pointer' onClick={() => {
                              window.location = `/all-product?type=${serachKeyName}&id=${item?.id}`

                            }} >
                              <p> {item?.name || ""}</p>
                              {/* <small>{item?.short_description?.substring(3,30)+"..."}</small> */}
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
                navigate("/cart")
              } else {
                navigate(`${window.location?.pathname+window.location?.search}`, {
                  state: { popName: "Sigin" }
                })
              }
            }}>
              <i className="fa-solid fa-cart-shopping"></i>
              {userData.token && Number(cartListCountData) > 0 ? (
                <span>{cartListCountData}</span>
              ) : (
                Number(cartCount)> 0?  <span>{cartCount}</span> :""
              )}
            </a>

            <a onClick={() => {
              if (userData.token) {
                navigate("/wish-list")
              } else {
                navigate(`${window.location?.pathname+window.location?.search}`, {
                  state: { popName: "Sigin" }
                })
              }
            }}>
              <i className="fa-solid fa-heart"></i>
              {userData.token && Number(cartWishListCountData) > 0 ? (
                <span> {cartWishListCountData}</span>
              ) : ""}
            </a>
            {userData.token ?
              <a href="#" onClick={() => {
                setShowprofile(!showProfile)
              }} className="sign-in"><i className="fa-solid fa-user"></i> <i className="fa-solid fa-chevron-down"></i></a> :
              <a onClick={() => {
                navigate(`${window.location?.pathname+window.location?.search}`, {
                  state: { popName: "Sigin" }
                })
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
            <a href="/wish-list"><img src="assets/icons/menu1.svg" alt="img" /> Wishlist</a>
            <a href='#' onClick={() => {
              navigate("/user-dashboard", {
                state: "Purchase History"
              })
            }} ><img src="assets/icons/menu2.svg" alt="img" /> Order</a>
            <a href="/user-dashboard"><img src="assets/icons/menu3.svg" alt="img" /> Edit Profile</a>
            <a href="#"
              onClick={() => {
                dispatch(fetchSuccess({ user: "", token: "" }))
                window.location = "/"
              }}
            ><img src="assets/icons/menu4.svg" alt="img" /> Logout</a>
          </div>
        </div>
        <div className="blank"></div>
      </header>
      {
        (state?.popName == "Sigin" && !userData.token) &&
        <Login setShowpopup={setShowpopup} />
      }
      {
        (state?.popName == "Signup" && !userData.token) &&
        <SignUp setShowpopup={setShowpopup} />}
      {
        state?.popName == "forgotPassword" &&
        <ResetPassword setShowpopup={setShowpopup} />
      }

    </React.Fragment>
  );
}

export default Header;
