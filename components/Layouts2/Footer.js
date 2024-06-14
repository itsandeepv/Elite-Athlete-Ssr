import React, { useEffect, useState } from 'react';
import { getNewsLetter } from '../../redux/actions/newsLetterActions';
import { hasValidationError, validatedFields, validationError } from '../../helpers/frontend';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';


function Footer() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [NewsLetter, setNewsLetter] = useState([]);
  const { newsLetterData } = useSelector((state) => state)

  const [formData, setFormData] = useState({email: ""})


  const onChangeHandle = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const validateInput = ["email"]

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validatedFields(formData, validateInput, setErrors)) {
      return;
    }else if(formData){
      setIsButtonDisabled(true);
      dispatch(getNewsLetter(`/api/subscribe-to-newsletter`, formData, setIsButtonDisabled));
      setFormData({ email: ""});
    } 
  };
  

  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img
              src="assets/icons/footer-logo.svg"
              alt="logo"
              className="logo-img"
            />
            <p>
              BEYOND JUST WORK, B-38, Old DLF Colony, Sector 14, Gurugram,
              Haryana 122001
            </p>
            <p>Call us : +91 6969696969</p>
            <p>Email : support@gmail.com</p>
            <div className="links-icon">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <h5>Shop by</h5>
            <ul>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Shop by goal</a>
              </li>
              <li>
                <a href="#">Top 10</a>
              </li>
              <li>
                <a href="#">Beauty</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Information</h5>
            <ul>
              <li>
                <a href="/aboutus">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Customer Service</h5>
            <ul>
              <li>
                <a href="#">Help & FAQs</a>
              </li>
              <li>
                <a href="#">Terms of Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Online Returns Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Newsletter Sign Up</h5>
            <p>Receive our latest updates about our products and promitions.</p>
            {hasValidationError(errors, "email") ? (<span style={{ color: "red", fontSize: "12px" }} className="has-cust-error">{formData?.email == "" && validationError(errors, "email")}</span>) : null}
            <div className="search-container">
              <form onSubmit={handleSubmit} className='w-100'>
                <input type="email" id='email' name='email' value={formData?.email} onChange={(e) => onChangeHandle(e)} placeholder='Enter your email' style={hasValidationError(errors, "email") ? { borderBottom: "2px solid red" } : {}} />
                <button type="submit"  disabled={isButtonDisabled}>Subscribe</button>
              </form>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="check" id="check" required checked/>
              <p>
                I agree with the Terms of Use and Privacy Policy and I declare
                that I have read thee information is required in accordance with
                Article 13 of GDPR
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <p>Logo © 2023. All Rights Reserved</p>
        <img src="assets/icons/payment-icon.svg" alt="payment" />
      </div>
    </footer>
  );
}

export default Footer;
