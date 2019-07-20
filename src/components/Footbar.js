import React from 'react'
import globe from './images/globe-64.png'
import previous from './images/previous-64.png'
import search from './images/search-12-64.png'
import {Link} from 'react-router-dom'



const Footbar = () =>{
    return (
        
        <div className="footbar">
      
         <Link to="/search"><img src={search} alt='globe'/></Link>
            <Link to="/"><img src={globe} alt="search"/></Link>
            <Link to="/previous"><img src={previous} alt='previous'/></Link>
        </div>
      
    )
}
export default Footbar
  /*
       <Router>
            
            </Router>
         
            */