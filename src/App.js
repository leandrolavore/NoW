import React, { Component } from 'react'
import News from './News.js'
import Weather from './Weather.js'
require('dotenv').config()


const key = process.env.REACT_APP_GOOGLE_MAPS_KEY
const keyNews = process.env.REACT_APP_NEWS_KEY

export default class Crashtest extends Component {
    constructor(){
        super();
        this.state = {
            h:'',
          

        }
    }

    componentDidMount(){
     
    
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
              console.log(position)
              let x = position;
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=
            ${x.coords.latitude},${x.coords.longitude}&key=${key}`)
            .then(res=>res.json())
            .then(data=>{
                let h = data;
                console.log(h)
                if (h.plus_code.compound_code.includes("Australia")){
                    h = "au"
                
                  } else  if (h.plus_code.compound_code.includes("USA")){
                    h= "us"
              
                  } else  if (h.plus_code.compound_code.includes("Brazil")){
                    h= "br"
              
                  } else  if (h.plus_code.compound_code.includes("France")){
                    h= "fr"
              
                  } else  if (h.plus_code.compound_code.includes("England")){
                    h= "gb"
              
                  } else  if (h.plus_code.compound_code.includes("Japan")){
                    h= "jp"
              
                  } else  if (h.plus_code.compound_code.includes("India")){
                    h= "in"
              
                  } else  if (h.plus_code.compound_code.includes("China")){
                    h= "cn"}
                    else{
                      h= "us"
                    }
                    
                    fetch(`https://newsapi.org/v2/top-headlines?country=${h}&apiKey=${keyNews}`)
                    .then(res=>res.json())
                    .then(data=>{this.setState({news: data})
                    console.log(this.state.news)})

                 
            })
    
     
        })
    
        
                
               
           
    
        }else{console.log("no geolocation")}
    
    }


  
    
    render() {

      const {news} = this.state

      
       
        return (
         
          <div className="backlogo">
            <h1 className='maintitle'>News Of the World</h1>
            <div id="appcontainer">
            
              <News news={news}/>
              <Weather/>
              
            </div>
         
            </div>
         
        )
    }
}
/* 


*/