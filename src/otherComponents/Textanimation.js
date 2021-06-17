import React from 'react';
import Typewriter from 'typewriter-effect';

const Textanimation = () => {
    return (
        <>
           <div className="heading_title">
               <Typewriter
                   onInit={(ty)=>{
                    ty.typeString("Welcome To Tours").pause(2000).deleteAll().typeString("Lets Travel together").pause(2000).deleteAll().typeString("Swipe Down & Explore").start();
                   }}
               />
           </div> 
        </>
    )
}

export default Textanimation
