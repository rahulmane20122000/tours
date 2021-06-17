// import react from 'react';
import { Button } from '@material-ui/core';
import img1 from '../img/16.svg';
import Footer from '../otherComponents/Footer';
import {icon_style,right_img} from '../Styles/Loginstyles/Login_styles';
const Login=()=>{
   return(
       <>
<div className="main_register1" id="main_register1" >
            <div className="register" id="register">
            <div className="sign_in" id="sign_in">
                <h2>Login</h2>
                <form method="POST">
                  <div className="user_name" id="user_name">
                  <i style={icon_style} className="fas fa-envelope-open"></i>
                  <input type="text" id="mail_input" className="mail_input" placeholder="Enter your email" />
                  </div>
                  <div className="password">
                  <i style={icon_style}className="fas fa-lock"></i>
                  <input type="password" id="password_input" className="password_input" placeholder="Enter your password" />
                  </div>
                  <Button id="login_btn" className="login_btn">Login</Button>
                </form>
                </div>
                <div style={right_img} className="right_img">
                    <img  src={img1} alt="tours"/>
                </div>
            </div>
            </div>
            <Footer/>
   
       </>
   );
}

export default Login;