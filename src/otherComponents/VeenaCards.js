import React from 'react';
import Veena from './VeenaWorld';
import Cards from './Cards';

const VeenaCards = () => {
    return (
        <>
            <div className="booking"><h1>VeenaWorld Tours</h1></div>
          <div className="row">
         <div className="row_poster"> </div>
          {Veena.map((item)=>{
              return(
                  <Cards imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} />
              );
          })}
          </div>   
        </>
    )
}

export default VeenaCards;
