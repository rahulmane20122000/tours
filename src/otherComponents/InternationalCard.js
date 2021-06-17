import React from 'react';
import International from './InterNational';
import Cards from './Cards';

const InternationalCard = () => {
    return (
        <>
        <div className="wrap_veena">
           <div className="veena"><h1>International Tours</h1></div>
          <div className="row">
         <div className="row_poster1"> 
          {International.map((item,i)=>{
              return(
                  <Cards className="international_cards_mapping" id="international_cards_mapping" key={i} imgSrc={item.img} title={item.name} plan={item.plan} price={item.price} overview={item.overView}/>
              );
          })}
          </div>
          </div>  
          </div>  
        </>
    )
}

export default InternationalCard;
