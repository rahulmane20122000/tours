import React from 'react'
import { Button } from '@material-ui/core';

const Cards = (props) => {
    return (
        <>
           <div className="cards_div">
               <div className="cards_info">
                   <img src={props.imgSrc} alt="tours"/>
                   <div className="cards2">
                   <h2>{props.title}</h2>
                   <p><span style={{"color":"#228C22","fontWeight":"600"}}>Days :</span> {props.plan}</p>
                   <p><span style={{"color":"#228C22","fontWeight":"600"}}>Price :</span>{props.price}</p>
                   
                   </div>
                   <Button>Book My Tour</Button>
                   
               </div>
           </div> 
        </>
    );
}

export default Cards;
