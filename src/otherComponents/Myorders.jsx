import {withRouter} from 'react-router-dom';
import {useLocation} from 'react-router';
import { Button } from "@material-ui/core";
import Footer from './Footer';
import MaterialTable from 'material-table';
import btn_style from '../Styles/Myordersstyles/My_orders_styles';

const Myorders=()=>{
  
   const location=useLocation();
   const ticket=[
   
     {
      Title:"Pune",
      price:"$150",
      number: "adult X 2 Kids X 1",
      BookingID:123456,
      TicketName:"xyz"


    },
    {
      Title:"Manali",
      price:"$300",
      number: "adult X 2 Kids X 1",
      BookingID:123456,
      TicketName:"xyz"
    },
    {
      Title:"Switzerland",
      price:"$405",
      number: "adult X 2 Kids X 1",
      BookingID:123456,
      TicketName:"xyz"
    },
    {
      Title:"Punjab",
      price:"$1000",
      number: "adult X 2 Kids X 1",
      BookingID:123456,
      TicketName:"xyz"
    },
   ];

   const column=[
     {
       title:"BookingId",field:"BookingID"
     },
     {
       title:"Title",field:"Title",

     },
     {
      title:"TicketName",field:"TicketName",

    },
     
     {
      title:"Pax",field:"number"
    },
    {
      title:"Price",field:"price"
    },
    

   ];

   console.log(location);
    return(
        <>  
        <div className="table_div" >
         <MaterialTable className="material-table" id="material-table" title="Your Tickets" data={ticket} columns={column} actions={[
  {
    icon: () => <Button style={btn_style}>Cancel</Button>,
    tooltip: 'Cancle My Tour',
    onClick: (event) => alert("You want to cancel Tour")
  }
]}
options={{
  actionsColumnIndex:-1,
}}
 />
         </div>
          <Footer/>
         
        </>
    );
}

export default withRouter(Myorders);