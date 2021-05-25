import React from "react";
import Veena from "./VeenaWorld";
import Cards from "./Cards";

// import { Button } from '@material-ui/core';
const VeenaCards = () => {
  return ( 
    <>
      <div className="wrap_veena">
        <div className="veena">
          <h1>VeenaWorld Tours</h1>
        </div>
        <div className="row">
          <div className="row_poster1">
            {Veena.map((item, index) => {
              return (
                <>
                  <Cards
                  key={index}
                    imgSrc={item.img}
                    title={item.name}
                    plan={item.plan}
                    price={item.price}
                    pathRoute={item.path}
                    overview={item.overView}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VeenaCards;
