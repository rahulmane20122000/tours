import React from 'react';
import Cards from './Cards';
import OurRecomm from './OurRecomm';

const CardsRender = () => {
    return (
        <>
        <div className="main_indian_tours">
        <div className="indian_tours">
         <div className="pit"><h1>Our Recommendations</h1></div>
          <div className="row">
         
          {OurRecomm.map((item,index)=>{
              return(
                  <Cards className="cards_map" id="cards_map" key={index} imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} overview={item.overView} />
              );
          })}
          </div>  
          </div>
          </div>
        </>
    )
}

export default CardsRender;
