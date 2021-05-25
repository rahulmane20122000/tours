import React from "react";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


const mystyle_btn={
  width:"500px",
  margin:"20px",
  fontWeight:"600"
}
const style_btn = {
  color: "white",
  textDecoration: "none",
  width:"100vw"
  
};
const TourDetails = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg_div">
        <div className="main_folder">
          <div className="main_details">
            <div className="details_content">
              <h1>{location.state.title}</h1>
              <img src={location.state.imgSrc} alt="tours" />
              {console.log(location.state)}
            </div>
            <div className="overview_details">
              <div className="tour_overview">
                <h2 className="tour_ovr">OverView</h2>
                <p>{location.state.overview}</p>
              </div>
              <div className="tickets">
                <h2 className="tour_ovr2">Tickets</h2>
                <p style={{"lineHeight":"2.8rem","marginTop":"-1rem","marginLeft":"40px"}}>Price Includes Only Travelling and Stay cost.<br/>Extra Charges for extra things <br/><span style={{"color":"red","fontSize":"1.5rem"}}>Price:{location.state.price}</span></p>
              </div>
              <div className="important_info">
                <h2 className="tour_ovr2">Key Points</h2>
                <ul>
                  <li>Know before you go</li>
                  <li>Infants must sit on laps</li>
                </ul>
              </div>
              <div className="Things_div">
              <h2 className="tour_ovr2">Things To Carry</h2>
                  <ul>
                      <li>Camera</li>
                      <li>Comfortable FootWear</li>
                      <li>Extra Set Of Clothes</li>
                  </ul>
              </div>
              <div className="addtional_info">
              <h2 className="tour_ovr2">Additional Info</h2>
                  <ul>
                      <li>Children must be accompanied by an adult</li>
                      <li>A minimum of 2 people per booking is required</li>
                  </ul>
              </div>
              <div className="terms_condition">
              <h2 className="tour_ovr2">Terms & Conditions</h2>
                  <ul>
                      <li>Confirmation will be received at time of booking</li>
                      <li>Not wheelchair accessible</li>
                  </ul>
              </div>
              <div className="covid_info">
              <h2 className="tour_ovr2">Covid Guidelines</h2>
                  <ul>
                  <div className="co_ru">
                  <div className="left_info">
                  <li>Face masks required for travelers in public areas</li>
                  <li>Face masks required for guides in public areas</li>
                  <li>Face masks provided for travelers</li>
                  <li>Social distancing enforced throughout experience</li>
                  <li>Regularly sanitized high-traffic areas</li>
                  <li>Covid Negative RT-pcr Report Needed</li>
                  </div>
                  <div className="right_info">
                  <li>Social distancing enforced throughout experience</li>
                  <li>Regularly sanitized high-traffic areas</li>
                  <li>Gear/equipment sanitized between use</li>
                  <li>Guides required to regularly wash hands</li>
                  <li>Temperature checks for travelers upon arrival</li>
                  <li>Contactless payments for gratuities and add-ons</li>
                  </div>
                  </div>
                  </ul>
              </div>
              <div className="cancel_policy">
              <h2 className="tour_ovr2">Cancellation Policy</h2>
              <ul>
                  <li>Up to 24 hours before the beginning of the activity: full refund Less than 24 hours before the beginning of the activity or no-show : no refund</li>
                  <li>Your Cancellation may be affected by bad Weather,not Enough Travellers</li>
              </ul>
              </div>
              <div className="refund_policy">
                  <h2 className="tour_ovr2">Refund Policy</h2>
                  <ul>
                      <li>The applicable refund amount will be processed within 20 business days</li>
                      <li>All applicable refunds will be done in traveller's wallet</li>
                  </ul>
              </div>
              <div className="payment_policy">
              <h2 className="tour_ovr2">Payment Policy</h2>
                <ul>
                    <li>100.0% of total tour cost will have to be paid before the date of booking</li>
                </ul>
              </div>
              <div className="btn_tour">
              <Button style={mystyle_btn} >
                <Link
                  style={style_btn}
                  to={{
                    pathname: `/confirm/${location.state.title}`,
                    state: {
                      cityname: location.state.title,
                      price: location.state.price,
                      img: location.state.imgSrc,
                    },
                  }}
                >
                  Check Availability
                </Link>
              </Button>
              
            </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default withRouter(TourDetails);
