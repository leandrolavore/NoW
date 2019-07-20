import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
require('dotenv').config()

const keyNews = process.env.REACT_APP_NEWS_KEY

const Previous = (props) => {

    const [news, setNews]=useState('')
    
  console.log(props.prevQuerys)

  function fetchData(e, query){
    e.preventDefault();
    if(query!==""){
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${keyNews}`)
        .then(res=>res.json())
        .then(data=>{setNews([data.articles[0].title, data.articles[0].url, data.articles[0].urlToImage])})

    }
    
}


  let page;

  if(props.prevQuerys.length === 0 || props.prevQuerys === undefined){
    
    page = <p className="prevp">No previous searches...</p>
    
    }else if(props.prevQuerys.length !== 0){

  
       
           page= props.prevQuerys.map((query, i)=><div className="page">
            <h3>Querys: <p>{props.prevQuerys[i]}</p></h3>
            <button key={i} onClick={(e)=>fetchData(e, props.prevQuerys[i])}>see again</button>
            </div>)}
          

  

  return (

    <div className='previouscontainer'>
      <h1 className="prevtitle">Your Previous Querys:</h1>
        <div className='previouspage'>
        {page}
        </div>
      
        <div className='linkcontainer'>
        <a className="prevlink" href={news[1]}>{news[0]}</a>
        
        </div> 
    </div>
        
  )
   
   
}



const mapStateToProps = (state) =>{

    return {prevQuerys: state.prevQuerys}
    
}


export default connect(mapStateToProps)(Previous)




/*

  
   */