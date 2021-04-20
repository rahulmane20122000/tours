import React from 'react';
import Cards from './Cards';
import cards from './CardsData';

const CardsRender = () => {
    return (
        <>
         <div className="booking"><h1>Popular Indian Tours</h1></div>
          <div className="row">
         
          {cards.map((item)=>{
              return(
                  <Cards imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} />
              );
          })}
          </div>  
        </>
    )
}

export default CardsRender;
