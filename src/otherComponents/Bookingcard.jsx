import React from 'react'

const Bookingcard = (props) => {
    return (
        <>
            <div className="booking_card">
           <div className="icon_div">
            <i class={props.icon}></i></div>
            <h2 style={{"color":"white"}}>{props.Text}</h2>
            </div> 
        </>
    )
}

export default Bookingcard
