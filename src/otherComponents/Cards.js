import React from "react";
import { Button } from "@material-ui/core";
import { Link} from "react-router-dom";

const link_style={
    "textDecoration":"none",
    

}
const Cards = (props) => {
  

  return (
    <>
      <div className="cards_div">
        <div className="cards_info">
       
          <img src={props.imgSrc} alt="tours" />
          <div className="cards2">
            <h2>{props.title}</h2>
            <p>
              <span style={{ color: "#228C22", fontWeight: "600" }}>
                Days :
              </span>{" "}
              {props.plan}
            </p>
            <p>
              <span style={{ color: "#228C22", fontWeight: "600" }}>
                Price :
              </span>
              {props.price}
            </p>
          </div>
          <Button >
            <Link 
            style={link_style}
              to={{
                pathname: `/tourdetails/${props.title}`,
                state: {
                  title: props.title,
                  imgSrc: props.imgSrc,
                  overview: props.overview,
                  price:props.price,
                  info:props.info,
                  
                },
              }}
              exact
            >
              Book My Tour
            </Link>
          </Button>
         
        </div>
      </div>
    </>
  );
};

export default Cards;
