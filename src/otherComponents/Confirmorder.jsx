import React,{ useState } from 'react';
import { useLocation,withRouter } from 'react-router';
import { Button } from "@material-ui/core";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';


const mystyle_btn={
    
    margin:"20px",
    fontWeight:"600"
  }

const link_style={
    "textDecoration":"none",
    "color":"white",
    "width":"100vw",
    "height":"fit-content"

}

const Confirmorder = () => {
    const [value, onChange] = useState(new Date());
    const location=useLocation();
    console.log("co"+location);
    return (
        <>
        <div className="content_warp">
        {console.log(location.state)}
           <div className="main_order">
                 <div className='order_title'>
                     <h1>Check Availability</h1>
                 </div>
                 <div className="order_details">
                     <div className="orders_content">
                        <div className="city_details">
                        <h2>City  </h2>
                        <h2>{location.state.cityname}</h2>
                        </div>
                        <div className="number_people">
                            <div className="Adult_div">
                            <h2>Adult</h2>
                            <input type="number"  min="0" placeholder="Number of Adult" required/>
                            </div>
                            <div className="children_div">
                            <h2>Kids</h2>
                            <input type="number" placeholder="Number of Kids" required/>
                            </div>
                        </div>
                        <div className="calender">
                        <Calendar
                        
        onChange={onChange}
        value={value}
      />
                        </div>
                        <div className="amount_details">
                            <h2>Price</h2>
                            <h2>{location.state.price}</h2>
                        </div>
                        <div className="btn_confirm">
                            <Button style={mystyle_btn} ><Link style={link_style} to={{pathname:`/mytours/${location.state.cityname}`,state:{img:location.state.img,price:location.state.price,city:location.state.cityname}}}>Book Now</Link></Button>
                            <Button style={mystyle_btn}>Check</Button>
                        </div>
                     </div>
                 </div>
                 
           </div> 
           </div>
           <Footer/>
        </>
    )
}

export default withRouter(Confirmorder);
