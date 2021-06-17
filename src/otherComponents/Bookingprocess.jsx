
import Bookingcard from './Bookingcard';




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