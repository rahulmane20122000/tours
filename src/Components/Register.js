import React from 'react';
import { Button } from '@material-ui/core';
import icon_style from '../Styles/Register/Register_styles'
import img1 from '../img/17.svg';
import Footer from '../otherComponents/Footer';


const Register = () => {
    return (
        <>
        <div className="main_register">
            <div className="register">
            <div className="sign_in">
                <h2>Register</h2>
                <form method="POST">
                  <div className="user_name">
                  <i style={icon_style} className="fas fa-user"></i>
                  <input type="text" placeholder="Enter your Name" className="register_input" id="register_input" />
                  </div>
                  <div className="phone_number">
                  <i style={icon_style} className="fas fa-mobile"></i>
                  <input type="text" placeholder="Enter your Number" className="register_phone" id="register_phone" />
                  </div>
                  <div className="email_address">
                  <i style={icon_style} className="fas fa-envelope-open"></i>
                  <input type="email" style={{"textTransformation":"lowercase"}} placeholder="Enter your Mail" className="register_mail" id="register_mail" />
                  </div>
                  <div className="address">
                  <i style={icon_style} className="fas fa-address-book"></i>
                  <input type="text" placeholder="Enter your address" className="register_address" id="register_address" />
                  </div>
                  <div className="password">
                  <i style={icon_style} className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" className="register_pass" id="register_pass" />
                  </div>
                  
                  <Button className="register_btn" id="register_btn" >Register</Button>
                </form>
                </div>
                <div className="right_img">
                    <img style={{"height":"30rem","width":"26rem","marginLeft":"5rem"}} src={img1} alt="tours"/>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register;
