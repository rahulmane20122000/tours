// import react from 'react';
import { Button } from '@material-ui/core';
import img1 from '../img/16.svg';
import Footer from '../otherComponents/Footer';

const Login=()=>{
   return(
       <>
<div className="main_register1">
            <div className="register">
            <div className="sign_in">
                <h2>Login</h2>
                <form method="POST">
                  <div className="user_name">
                  <i style={{"fontSize":"25px"}} className="fas fa-envelope-open"></i>
                  <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="password">
                  <i style={{"fontSize":"25px"}}className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" />
                  </div>
                  <Button>Login</Button>
                </form>
                </div>
                <div style={{"marginLeft":"5rem"}} className="right_img">
                    <img  src={img1} alt="tours"/>
                </div>
            </div>
            </div>
            <Footer/>
   
       </>
   );
}

export default Login;