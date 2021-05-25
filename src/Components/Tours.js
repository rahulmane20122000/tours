import React from 'react';
import InternationalCard from '../otherComponents/InternationalCard'
import VeenaCards from '../otherComponents/VeenaCards'
import {withRouter} from 'react-router-dom'
import Footer from '../otherComponents/Footer';
import Search from '../otherComponents/Search';



const Tours = () => {
    
 
    return (
        <>
           <Search/>
           <VeenaCards/>
           <InternationalCard/>
           <Footer/>
        </>
    );
}

export default withRouter(Tours);

