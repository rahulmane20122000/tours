import { Button } from '@material-ui/core';
import React from 'react'

const Search = () => {
    return (
        <>
           <div className="search_filter">
               <div className="search_filter_content">
                   <input type="search" placeholder="Search..."/>
                   <Button><i class="fas fa-search"></i></Button>
               </div>
           </div> 
        </>
    )
}

export default Search;
