import React, { Component } from 'react'


export default class News extends Component {

    constructor(props){
        super(props);

        this.state = {

            isLoading: true,
            
        }
   
        
    }
    componentDidUpdate(prevProps, prevState){
      if(this.props !== prevProps){
        this.setState({isLoading: false})
      }
    }
   
  
  
    

    render() {

        const {isLoading} = this.state; 
   
        let page;

        
        
        if(isLoading){
          page = (<div id="newscontainer"><img className="mainglobe" width="120px" height="100px" 
          src={require('./787.gif')} alt='Now Loading'/></div>)
        }else {
          page = this.props.news.articles.map((n, i)=><div key={i} className="new">
          <img className="newimg" src={n.urlToImage} alt=""/> 
          <h3><a href={n.url} >{n.title}</a></h3>
          <p className= "desc">{n.description}</p>
        </div>)
        
          }
        

        return(
          <div id="newscontainer">
            {page}
          </div>
        )
      
    }
  }



