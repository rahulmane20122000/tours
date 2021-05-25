import React from "react";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="phone">
          <i className="fas fa-phone-alt"></i>
            <p>+91-9876543210</p>
          </div>
          <div className="mail">
          <i className="fas fa-envelope-open"></i>
            <p>tours@booking.com</p>
          </div>
        </div>

        <div className="address">
            <h3>Address</h3>
            <div className="main_add">
            <i className="fas fa-address-card"></i>
            <p>Mumbai Hawali No.4,<br/>Malad W<br/>415528</p>
            </div>
        </div>
        <div className="social_div">
            <h3>Social</h3>
            <div className="facebook">
            <i className="fab fa-facebook-f"></i>
            <p>Facebook</p>
            </div>
            <div className="instagram">
            <i className="fab fa-instagram"></i>
            <p>Instagram</p>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Footer;
