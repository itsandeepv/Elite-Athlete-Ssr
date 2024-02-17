import SignUp from "@components/Modal/SignUp";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Header() {

  // const states = useSelector((state)=>state)
  // console.log(states, "<<<");
  const [showPop ,setShowpopup] = useState(false)
  return (
    <React.Fragment>
      {/* <Sidebar/> */}
      <header className="py-2">
        <div className="container-fluid">
            <div className="left">
                <img src="assets/icons/logo.svg" alt="logo" />
            </div>
            <div className="middle">
                <i class="fa-solid fa-bars" id="hamburger"></i>
                <div className="search-container">
                    <select name="selct" id="selct">
                        <option value="1" selected disabled>All Categories</option>
                        <option value="2">Category 1</option>
                        <option value="3">Category 2</option>
                        <option value="4">Category 3</option>
                    </select>
                    <input type="search" placeholder="I’m shopping for..."/>
                </div>
            </div>
            <div className="right">
              <a href="#">
                <i class="fa-regular fa-heart"></i>
                <span>1</span>
              </a>
              <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
                <span>1</span>
              </a>
                <a href="#" onClick={()=>{setShowpopup(true)}} className="sign-in"><i class="fa-regular fa-user"></i> Sign in</a>
            </div>
        </div>
      </header>
      {
        showPop &&
        <SignUp setShowpopup={setShowpopup} />
      }
      
    </React.Fragment>
  );
}

export default Header;
