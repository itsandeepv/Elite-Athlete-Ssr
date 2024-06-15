import React, { useEffect, useState } from 'react';
import { getNewsLetter } from '../../redux/actions/newsLetterActions';
import { hasValidationError, validatedFields, validationError } from '../../helpers/frontend';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../../utils/urls';


function Footer() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [NewsLetter, setNewsLetter] = useState([]);
  const { newsLetterData } = useSelector((state) => state)

  const [formData, setFormData] = useState({ email: "" })

  const [pageData, setpageData] = useState()
  const fatchPageData = async () => {
    await axios.get(baseUrl + "/api/get-all-pages").then((res) => {
      if (res.data?.responseCode == 200) {
        setpageData(res.data?.result)
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  // console.log(pageData, "<<<<<<<<<<pageData");
  useEffect(() => { fatchPageData() }, [])

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
    } else if (formData) {
      setIsButtonDisabled(true);
      dispatch(getNewsLetter(`/api/subscribe-to-newsletter`, formData, setIsButtonDisabled));
      setFormData({ email: "" });
    }
  };


  const [footerData, setfooterData] = useState()
  const fatchfooterData = async () => {
    await axios.get(baseUrl + "/api/get-all-settings").then((res) => {
      if (res.data?.responseCode == 200) {
        setfooterData(res.data?.result)
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => { fatchfooterData() }, [])




  return (
    <footer>
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <div className="d-flex all-imhgs">
            <img
              src={"/footer/fssai.png"}
              alt="logo"
              className="logo-img"
            />
            <img
              src={"/footer/secure.png"}
              alt="logo"
              className="logo-img"
            />
            <img
              src={"/footer/authentic.png"}
              alt="logo"
              className="logo-img"
            />
            <img
              src={"/footer/certified-Icon.png"}
              alt="logo"
              className="logo-img"
            />
            <img
              src={"/footer/last-icn.png"}
              alt="logo"
              className="logo-img"
            />
          </div>
          <p>
            {footerData?.result?.address || `BEYOND JUST WORK, B-38, Old DLF Colony, Sector 14, Gurugram,
            Haryana 122001`}
          </p>
          <p>Call us : <a href={`mobileTo:${footerData?.result?.call_us}`}>{footerData?.result?.call_us || "+91 91078888088"}</a> </p>
          <p>Email : <a href={`mailto:${footerData?.result?.admin_mail}`}>{footerData?.result?.admin_mail || "contact@gmail.com"}</a>  </p>
          <div className="links-icon">

            {
              footerData?.socialLinks?.length > 0 && footerData?.socialLinks?.map((item, index) => {
                return (
                  <a href={item?.url} key={index}>
                    <i className={`fa-brands fa-${item?.name?.toLowerCase()}`}></i>
                  </a>
                )
              })
            }
            {/* <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a> */}
            {/* <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a> */}
          </div>
        </div>

        <div className="col-lg-2">
          <h5>Information</h5>
          <ul>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            {
              pageData?.filter((item) => item?.page_type == "information")?.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`/pages?pagename=${item?.slug}`}>{item?.title}</a>
                  </li>
                )
              })
            }
            {/* <li>
              <a href="#">Contact us</a>
            </li> */}
          </ul>
        </div>
        <div className="col-lg-2">
          <h5>Customer Service</h5>
          <ul>
                  <li>
                    <a href={`/contact`}>Contact us</a>
                  </li>
            {
              pageData?.filter((item) => item?.page_type == "customer_service")?.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`/pages?pagename=${item?.slug}`}>{item?.title}</a>
                  </li>
                )
              })
            }

          </ul>
        </div>
        <div className="col-lg-3">
          <h5>Newsletter Sign Up</h5>
          <p>Receive our latest updates about our products and promitions.</p>
          {hasValidationError(errors, "email") ? (<span style={{ color: "red", fontSize: "12px" }} className="has-cust-error">{formData?.email == "" && validationError(errors, "email")}</span>) : null}
          <div className="search-container">
            <form onSubmit={handleSubmit} className='w-100'>
              <input type="email" id='email' name='email' value={formData?.email} onChange={(e) => onChangeHandle(e)} placeholder='Enter your email' style={hasValidationError(errors, "email") ? { borderBottom: "2px solid red" } : {}} />
              <button type="submit" disabled={isButtonDisabled}>Subscribe</button>
            </form>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="check" id="check" required defaultChecked />
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
      <p>SuppKart {footerData?.result?.copyright ? footerData?.result?.copyright : "© 2024. All Rights Reserved"}</p>
      <img src="assets/icons/payment-icon.png" alt="payment"  style={{maxWidth:"220px"}}/>
    </div>
  </footer>
  );
}

export default Footer;
