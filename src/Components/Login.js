// import react from 'react';
import { Button } from '@material-ui/core';
import img1 from '../img/15.svg';

const Login=()=>{
   return(
       <>
<div className="main_register">
            <div className="register">
            <div className="sign_in">
                <h2>Login</h2>
                <form method="POST">
                  <div className="user_name">
                  <i class="fas fa-envelope-open"></i>
                  <input type="text" placeHolder="Enter your email" />
                  </div>
                  <div className="password">
                  <i class="fas fa-lock"></i>
                  <input type="text" placeHolder="Enter your password" />
                  </div>
                  <Button>Login</Button>
                </form>
                </div>
                <div className="right_img">
                    <img src={img1} alt="tours"/>
                </div>
            </div>
            </div>
   
       </>
   );
}

export default Login;