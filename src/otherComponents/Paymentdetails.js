import React from 'react'
import {useLocation,NavLink} from 'react-router-dom';
import {para1,para2,span_style} from '../Styles/Paymentdetstyles/Payment_styles';

const Paymentdetails = () => {
    const location=useLocation();
    
    return (
        <>
          <div className="payment_content">
          
          <div className="payment_img_title">
              <div className="payment_img">
                  <img src={location.state.img} alt="tours"/>
              </div>
              <div className="payment_city">
                  <h2 className="payment_city_name" id="payment_city_name">{location.state.city}</h2>
              </div>
              </div>
              <div className="payment_dates">
                  <p className="payment_dates" id="payment_dates" style={para1}><span style={span_style}>Tour Date & Time:</span>Wed, Jun 01, 1.00 PM <NavLink to='#' style={{"marginLeft":"10px"}}>Edit</NavLink> </p>
              </div>
              <div className="total_payble">
             
              <div className="adults_kids">
              
                  <p className="payment_adults" id="payment_adults" style={para2}>{location.state.adult} : adult</p>
                  <p className="payment_kids" id="payment_kids" style={para2}>{location.state.kid} : kids</p>
                  <p className="payment_service_fees" id="payment_service_fees" style={para2}> Service Fees:</p>
                  </div>
                  <div className="amount_payment">
                      <p className="payment_amount_adult" id="payment_amount_adult" style={para2}>100$</p>
                      <p className="payment_amount_kids" id="payment_amount_kids" style={para2}>100$</p>
                      <p className="payment_amount_service_fees" id="payment_amount_service_fees" style={para2}>10$</p>

                  </div>
              </div>
              <div className="amount_det">
                  <p className="payment_total_pay" id="payment_total_pay">Total Payable:<span>210$</span></p>
              </div>
          </div>
        </>
    )
}

export default Paymentdetails;
