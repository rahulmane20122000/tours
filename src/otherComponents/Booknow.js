import React from 'react';
import Select from 'react-select';
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useLocation,withRouter } from 'react-router';
import Footer from './Footer';

const option=[
    {
        value:1,
        label:"Mr"
    },
    {
        value:2,
        label:"Mrs"
    },
]
const lable_style2={
    "marginTop":"3rem",
    "fontWeight":"600"
}
const lable_style3={
    "marginTop":"3rem",
    "fontWeight":"600",
    "marginLeft":"100px"
}
const lable_style4={
    "marginTop":"3rem",
    "fontWeight":"600",
    "marginLeft":"50px",

}
const heading_style={
    "color":"#228c22",
    "fontWeight":"bold",
    // "marginTop":"12rem",
    marginBottom:"30px",
    textAlign:"center",
    
}

const Booknow = () => {
    const location=useLocation();
    const cityname=location.state.city;
    console.log(cityname);
    return (
        <>
           <div className="main_book_now">
           
           <div className="wrap_cont">
           <h1 style={heading_style}>Book Your Tour</h1>
           <form method="POST">
              <div className="title_first_Name">
              <div className="row_set">
                <label style={lable_style2}>Title</label>
                <select placeholder="Title" style={{"width":"100px","height":"50px"}} >
                    <option>Mr</option>
                    <option>Mrs</option>
                </select>
                </div>
                <div className="row_set1">
                <label className="fsname" style={lable_style3}>First Name</label>
                <input required={true}  type="text" placeholder="Enter Your Name"/>
                </div>
              </div>
              <div className="lastname_email">
              <div className="row_set">
                  <label style={lable_style4}>Last Name</label>
                  <input required={true}  type="text" placeholder="Enter Your Surname"/>
                  </div>
                  <div className="row_set">
                  <label style={lable_style4}>Email</label>
                  <input required={true}  type="text" placeholder="Enter Your Email"/>
                  </div>
              </div>
              <div className="phone_passport">
              <div className="row_set">
                  <label style={lable_style4}>Mobile No.</label>
                  <input required={true}  type="text" placeholder="Enter Your Mobile Number"/>
                  </div>
                  <div className="row_set">
                  <label style={lable_style4}>Passport No.</label>
                  <input required={true}  type="text" placeholder="Enter Your Passport No."/>
                  </div>
                  
              </div>
              <div className="comments">
                <div className="row_set">
                  <label style={lable_style2}>Any Comments</label>   
                  <textarea placeholder="Your Comments"/>
                  </div>
              </div>
              <div className="book_btn">
             <Button><Link style={{"textDecoration":"none","color":"white","fontWeight":"600"}} to={{pathname:`/mytickets/${location.state.cityname}`,state:{city:cityname,img:location.state.img,price:location.state.price}}}>Book Now</Link></Button>
              </div>
              </form>
              </div>
           </div> 
           <Footer/>
        </>
    )
}

export default withRouter(Booknow);
