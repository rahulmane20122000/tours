import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import img from '../img/18.svg';
import Select from 'react-select';
import {withRouter} from 'react-router-dom';
import Footer from './Footer';




const lable_style={
    "marginTop":"3rem",
    "fontWeight":"600"
}
const lable_style2={
    "marginTop":"3rem",
    "fontWeight":"600"
}

const input_style={
    "width":"20.5rem",
    "height":"2rem",
    "border":"none",
    "outline":"none",
    "borderBottom":"1px solid #228c22",
    "fontWeight":"600",
    "textIndent":"5px",
    "fontSize":"1rem"

}

const text_area={
    "width":"20.5rem",
    "height":"2rem",
     "border":"none",
     "fontWeight":"600",
     "textIndent":"5px",
     "fontSize":"1rem",
     "borderBottom":"1px solid #228c22",
     "outline":"none"
}

const heading_style={
    "color":"#228c22",
    "fontWeight":"bold",
    // "marginTop":"12rem",
    
}

const img_style={
    // "marginTop":"5rem",
    "marginLeft":"5rem",
    transform:"translateY(10%)",
    
    
}



const Myaccount = () => {
   
  
   
  
    return (
        <>
        
           <div style={{"transform":"translateY(20%)"}}  className="main_accpage">
           <div style={{"marginBottom":"100px"}} className="accdet_wrap">
              <div className="acc_det">
              <h1 style={heading_style}>Account Information</h1>
                  <div  className="user_info">
                  <label  style={lable_style} >UserName</label>
                  
                      <input style={input_style} value="Hemant" id="userdet"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Mobile Number</label>
                      <input style={input_style} value="+91-9856471235" id="mobile_no"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Email</label>
                      <input style={input_style} value="hemantshah@gmail.com" id="email_id"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Address</label>
                      <textarea style={text_area} id="Address_info" value="a-65 delhi wasant vihar"></textarea>
                  </div>
              </div>
              <div className="right_img">
                <img style={img_style} src={img} alt="tours"/>
              </div>
              </div>
             
           </div>
        
           <Footer/>
        </>
    )
}



export default withRouter(Myaccount);


