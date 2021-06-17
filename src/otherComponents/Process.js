import React from 'react';

import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useLocation,withRouter } from 'react-router';
import {lable_style2,lable_style3,lable_style4,heading_style,select_style,Link_styles} from '../Styles/Processstyles/Process_styles';

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

const Booknow = () => {
    const location=useLocation();
    
    console.log(location);
    return (
        <>
           
           
           
           <h1 style={heading_style}>Book Your Tour</h1>
           <form method="POST">
              <div className="title_first_Name">
              <div className="row_set">
                <label style={lable_style2}>Title</label>
                <select className="Process_title" id="Process_title" placeholder="Title" style={select_style} >
                    <option>Mr</option>
                    <option>Mrs</option>
                </select>
                </div>
                <div className="row_set1">
                <label className="fsname" style={lable_style3}>First Name</label>
                <input className="Process_input_firstname" id="Process_input_firstname" required={true}  type="text" placeholder="Enter Your Name"/>
                </div>
              </div>
              <div className="lastname_email">
              <div className="row_set">
                  <label style={lable_style4}>Last Name</label>
                  <input className="Process_input_lastname" id="Process_input_lastname" required={true}  type="text" placeholder="Enter Your Surname"/>
                  </div>
                  <div className="row_set">
                  <label style={lable_style4}>Email</label>
                  <input className="Process_input_mail" id="Process_input_mail" required={true}  type="text" placeholder="Enter Your Email"/>
                  </div>
              </div>
              <div className="phone_passport">
              <div className="row_set">
                  <label style={lable_style4}>Mobile No.</label>
                  <input className="Process_input_mobile" id="Process_input_mobile" required={true}  type="text" placeholder="Enter Your Mobile Number"/>
                  </div>
                  <div className="row_set">
                  <label style={lable_style4}>Passport No.</label>
                  <input className="Process_input_passport" id="Process_input_passport" required={true}  type="text" placeholder="Enter Your Passport No."/>
                  </div>
                  
              </div>
              <div className="comments">
                <div className="row_set">
                  <label style={lable_style2}>Any Comments</label>   
                  <textarea className="Process_textarea_comments" id="Process_textarea_comments" placeholder="Your Comments"/>
                  </div>
              </div>
              <div className="book_btn">
             <Button className="Process_btn_cnfrm" id="Process_btn_cnfrm"><Link style={Link_styles} to={{pathname:`/mytickets/${location.state.city}`,state:{city:location.state.city,img:location.state.img,price:location.state.price,adult:location.state.adult,kid:location.state.kid}}}>Book Now</Link></Button>
              </div>
              </form>
             
           
        </>
    )
}

export default withRouter(Booknow);
