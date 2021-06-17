
import img from '../img/18.svg';

import {withRouter} from 'react-router-dom';
import Footer from './Footer';
import {lable_style,lable_style2,input_style,text_area,heading_style,img_style,main_accpage,accdet_wrap} from '../Styles/Myaccountstyles/My_acc_styles';







const Myaccount = () => {
   
  
   
  
    return (
        <>
        
           <div style={main_accpage}  className="main_accpage">
           <div style={accdet_wrap} className="accdet_wrap">
              <div className="acc_det">
              <h1 style={heading_style}>Account Information</h1>
                  <div  className="user_info">
                  <label  style={lable_style} >UserName</label>
                  
                      <input className="myacc_username" id="myacc_username" style={input_style} value="Hemant" id="userdet"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Mobile Number</label>
                      <input className="myacc_Mobile_no" id="myacc_Mobile_no" style={input_style} value="+91-9856471235" id="mobile_no"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Email</label>
                      <input className="myacc_mail" id="myacc_mail" style={input_style} value="hemantshah@gmail.com" id="email_id"></input>
                  </div>
                  <div  className="mobile_info">
                  <label  style={lable_style2} >Address</label>
                      <textarea className="myacc_textarea" id="myacc_textarea" style={text_area} id="Address_info" value="a-65 delhi wasant vihar"></textarea>
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


