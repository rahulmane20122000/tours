import React from 'react';
import International from './InterNational';
import Cards from './Cards';

const InternationalCard = () => {
    return (
        <>
           <div className="booking"><h1>International Tours</h1></div>
          <div className="row">
         <div className="row_poster"> </div>
          {International.map((item)=>{
              return(
                  <Cards imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} />
              );
          })}
          </div>    
        </>
    )
}

export default InternationalCard;
