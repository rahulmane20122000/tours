import React, { useState } from "react";
import { useLocation, withRouter } from "react-router";
import { Button } from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import {mystyle_btn,link_style} from '../Styles/Confirmordersstyles/Confirm_orderrs_styles';
import Btn_style from "../Styles/Confirmordersstyles/Buttons_styles.js";


const Confirmorder = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const [value, onChange] = useState(new Date());
  const location = useLocation();
  console.log("co" + location);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  const increment1 = () => {
    setCount1(count1 + 1);
  };
  const decrement1 = () => {
    setCount1(count1 - 1);
    if (count1 <= 0) {
      setCount1(0);
    }
  };

  return (
    <>
      <div className="content_warp">
        {console.log(location)}
        <div className="main_order">
          <div className="order_title">
            <h1>Check Availability</h1>
          </div>
          <div className="order_details">
            <div className="orders_content">
              <div className="city_details">
                <h3>City </h3>
                <h2 className="confirm_city" id="confirm_city">{props.cityname}</h2>
              </div>
              <div className="number_people">
                <div className="Adult_div">
                  <h2>Adult</h2>
                  <div className="counter_btn">
                    <Button className="confirm_adult" id="confirm_adult"
                      style={Btn_style}
                      onClick={decrement}
                    >
                      -
                    </Button>
                    <h3 className="adult_count" id="adult_count">{count}</h3>
                    <Button className="confirm_kid" id="confirm_kid"
                      style={Btn_style}
                      onClick={increment}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="children_div">
                  <h2 className="kids_count" id="kids_count">Kids</h2>
                  <div className="counter_btn1">
                    <Button
                      style={Btn_style}
                      onClick={decrement1}
                    >
                      -
                    </Button>
                    <h3>{count1}</h3>
                    <Button
                      style={Btn_style}
                      onClick={increment1}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="calender">
                <Calendar className="confirm_dates" id="confirm_dates" onChange={onChange} value={value} />
              </div>
              {/* <div className="amount_details">
                            <h2>Price</h2>
                            <h2>{location.state.price}</h2>
                        </div> */}
              <div className="btn_confirm">
                <Button className="confirm_order_now" id="confirm_order_now" style={mystyle_btn}>
                  <Link
                    style={link_style}
                    to={{
                      pathname: `/mytours/${location.state.title}`,
                      state: {
                        img: location.state.imgSrc,
                        price: location.state.price,
                        city: location.state.title,
                        adult:count,
                        kid:count1,
                      },
                    }}
                  >
                    Book Now
                  </Link>
                </Button>
                <Button style={mystyle_btn}>Check</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Confirmorder);
