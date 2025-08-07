import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMale,
  FaFemale,
  FaShoppingBag,
  FaGlasses,
  FaInfoCircle,
  FaBlog,
  FaPhone,
  FaShoppingCart,
  FaQuestionCircle,
  FaTruck,
  FaCreditCard,
  FaLock
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-75 mx-auto">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        
        <div className="col mb-3 ">
          <h4 className="p-2 text-info text-center">Shop</h4>
          <hr></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaMale className="me-2" /> Men's Fashion
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaFemale className="me-2" /> Women's Fashion
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaShoppingBag className="me-2" /> Bags & Shoes
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaGlasses className="me-2" /> Accessories
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h4 className="p-2 text-info text-center">Information</h4>
          <hr></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaInfoCircle className="me-2" /> About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaBlog className="me-2" /> Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaShoppingCart className="me-2" /> How to Order
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaPhone className="me-2" /> Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h4 className="p-2 text-info text-center"> Service</h4>
          <hr></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaQuestionCircle className="me-2" /> FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaTruck className="me-2" /> Returns
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaCreditCard className="me-2" /> Payment Methods
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaLock className="me-2" /> Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h4 className="p-2 text-info text-center">Follow Us</h4>
          <hr></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaFacebook className="me-2" /> Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaTwitter className="me-2" /> Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaInstagram className="me-2" /> Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <FaYoutube className="me-2" /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
