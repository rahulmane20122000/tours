import React from 'react';
import Cards from './Cards';
import cards from './CardsData';

const CardsRender = () => {
    return (
        <>
        <div className="main_indian_tours">
        <div className="indian_tours">
         <div className="pit"><h1>Popular Indian Tours</h1></div>
          <div className="row">
         
          {cards.map((item,index)=>{
              return(
                  <Cards key={index} imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} overview={item.overView} />
              );
          })}
          </div>  
          </div>
          </div>
        </>
    )
}

export default CardsRender;
