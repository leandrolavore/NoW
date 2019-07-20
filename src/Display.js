import React, { Component } from 'react'

const key = process.env.REACT_APP_NEWS_KEY;

export default class Display extends Component {
    constructor(props){
        super();
        this.state= {
            
            news: []
           
         
        }
        this.fetchData = this.fetchData.bind(this)
    }
fetchData(){
    

    fetch(`https://newsapi.org/v2/top-headlines?country=
           ${this.props.here}&apiKey=${key}`)
            .then(res=>res.json())
            .then(data=>console.log(data))//data=>{this.setState({news: data, isLoading: false})}
            

}

 shouldComponentUpdate(nextProps, nextState){
   
    console.log(nextProps.here!==this.props.here)
       return(nextProps.here!==this.props.here) 
       

 }
 componentDidUpdate(prevProps, prevState, snapshot){


    console.log(this.props)

        if(this.props.here !== prevProps.here ){
            console.log('did update')
            this.fetchData();
        }
    }
   
    
        

    render() {
       
        console.log(this.props)
        

        return (
            
            <div>
                <p>{this.news}</p>
            </div>
        )
    }

}
/*




*/