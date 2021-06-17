import { Button } from '@material-ui/core';
import React from 'react'

const Search = () => {
    return (
        <>
           <div className="search_filter">
               <div className="search_filter_content">
                   <input className="serch_filter_input" id="serch_filter_input" type="search" placeholder="Search..."/>
                   <Button className="serch_filter_btn" id="serch_filter_btn"><i class="fas fa-search"></i></Button>
               </div>
           </div> 
        </>
    )
}

export default Search;
