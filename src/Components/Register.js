import React from 'react';
import { Button } from '@material-ui/core';

import img1 from '../img/14.svg';
const Register = () => {
    return (
        <>
        <div className="main_register">
            <div className="register">
            <div className="sign_in">
                <h2>Register</h2>
                <form method="POST">
                  <div className="user_name">
                  <i class="fas fa-user"></i>
                  <input type="text" placeHolder="Enter your Name" />
                  </div>
                  <div className="phone_number">
                  <i class="fas fa-mobile"></i>
                  <input type="text" placeHolder="Enter your Number" />
                  </div>
                  <div className="email_address">
                  <i class="fas fa-envelope-open"></i>
                  <input type="email" style={{"textTransformation":"lowercase"}} placeHolder="Enter your Mail" />
                  </div>
                  <div className="address">
                  <i class="fas fa-address-book"></i>
                  <input type="text" placeHolder="Enter your address" />
                  </div>
                  <div className="password">
                  <i class="fas fa-lock"></i>
                  <input type="text" placeHolder="Enter your password" />
                  </div>
                  
                  <Button>Register</Button>
                </form>
                </div>
                <div className="right_img">
                    <img src={img1} alt="tours"/>
                </div>
            </div>
            </div>
        </>
    )
}

export default Register
