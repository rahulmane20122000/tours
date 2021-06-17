import React from 'react';
import { withRouter } from 'react-router';
import Footer from './Footer';
import Paymentdetails from './Paymentdetails';
import Process from './Process';

const Booknow = () => {
    
    return (
        <>
           <div className="main_book_now">
           
           <div className="wrap_cont">
           <Process/>
              
              </div>
              <Paymentdetails/>
           </div> 
           <Footer/>
        </>
    )
}

export default withRouter(Booknow);
