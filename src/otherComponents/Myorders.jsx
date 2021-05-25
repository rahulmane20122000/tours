
import {withRouter} from 'react-router-dom';
import {useLocation} from 'react-router';
import { Button } from "@material-ui/core";
import Footer from './Footer';

const Myorders=()=>{
    
   const location=useLocation();
    return(
        <>
        <div className="Ticket_wrap">
        <div className="ticket_title">
          <h1>Your Tickets</h1>
        </div>
          <div className="myorder_main">
           
          {console.log(location)}
            <div className="trace_orders">
            
              <div className="img_box">
                <img src={location.state.img} alt="tours"/>
              </div>
              <div className="myorder_det">
                <h2>{location.state.city}</h2>
                <p style={{"color":"#228c22","fontSize":"1.5rem"}}>{location.state.price}</p>
                <p style={{"fontWeight":"600","fontSize":"1rem"}}>Cancelation Policy</p>
                <ui style={{"fontWeight":"600","lineHeight":"2rem"}}>
                <li>Up to 24 hours before the beginning of the activity.</li>
                  <li>Your Cancellation may be affected by bad Weather.</li>
                </ui>
              </div>
              <div className="cancel_order">
                   <Button>Cancel My Tour</Button>
              </div>
            </div>
          </div>
         
          
          </div>
          <Footer/>
         
        </>
    );
}

export default withRouter(Myorders);