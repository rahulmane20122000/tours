import React,{ useState } from 'react';
import img1 from '../img/08.jpg';
import img2 from '../img/02.jpg';
import img3 from '../img/13.jpg';
import {Carousel} from 'react-bootstrap';
import {First_img,Second_img,span_style,items_style} from '../Styles/Imagesliderstyles/imageslider_styles';


const ImageSlide = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <>
        <div className="image_div"  >
        <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={items_style}>
        <img
          className="d-block w-100"
         style={First_img}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="image_text">Explore <span className="span_class" style={span_style}>The World</span> </h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={Second_img}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="image_text">Let's <span className="span_class" style={span_style}>Explore</span></h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={Second_img}
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="image_text">Hello<span className="span_class" style={span_style}>Adventure</span> </h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        
           
        </>
    )
}

export default ImageSlide;
