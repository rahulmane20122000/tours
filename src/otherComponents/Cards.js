import React from "react";
import { Button } from "@material-ui/core";
import { Link} from "react-router-dom";
import {link_style,span_style} from '../Styles/Cardsstyles/Card_style';

const Cards = (props) => {
  

  return (
    <>
      <div className="cards_div">
        <div className="cards_info">
       
          <img src={props.imgSrc} alt="tours" />
          <div className="cards2">
            <h2 className="cards_title" id="cards_title">{props.title}</h2>
            <p className="cards_para" id="cards_para">
              <span className="cards_days" id="cards_days" style={span_style}>
                Days :
              </span>
              {props.plan}
            </p>
            <p className="cards_para" id="cards_para">
              <span className="cards_price" id="cards_price" style={span_style}>
                Price :
              </span>
              {props.price}
            </p>
          </div>
          <Button className="cards_btn" id="cards_btn" >
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
