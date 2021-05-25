// import react from 'react';
import Bookingcard from './Bookingcard';

// const booking_heading={
//     "textAlign":"center",
//     "fontSize":"4.5rem",
//     "color":"#228c22",
//     "fontWeight":"500",
//     "marginTop":"1.5rem",

// }


const Bookingprocess=()=>{
    return(
        <>
        <div className="main_booking">
        <div className="booking">
        <h1  >Booking Process</h1>
        <div className="cards_data">
        <div className="browse">
           <Bookingcard icon="fab fa-safari"  Text="Browse"/>
           </div>
           <div className="Dates">
           <Bookingcard icon="fas fa-calendar-alt"  Text="Select day"/>
           </div>
           <div className="travel">
           <Bookingcard icon="fas fa-globe-americas"  Text="Travel"/>
           </div>
           </div>
        </div>
        </div>
        </>
    );
}

export default Bookingprocess;