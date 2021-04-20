import React from "react";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="phone">
            <h6>Phone</h6>
            <p>+91-9876543210</p>
          </div>
          <div className="address">
            <h6>Email</h6>
            <p>tours@booking.com</p>
          </div>
        </div>

        <div className="address">
            <h3>Address</h3>
            <p>Mumbai Hawali No.4,<br/>Malad W<br/>415528</p>
        </div>
        <div className="social_div">
            <h3>Social</h3>
            <div className="facebook">
            <i class="fab fa-facebook-f"></i>
            <p>Facebook</p>
            </div>
            <div className="instagram">
            <i class="fab fa-instagram"></i>
            <p>Instagram</p>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Footer;
