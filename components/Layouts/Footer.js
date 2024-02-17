import React from "react";

function Footer() {
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
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
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
            <div className="search-container">
              <input type="text" placeholder="Email"/>
              <button>Subscribe</button>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="check" id="check" />
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
