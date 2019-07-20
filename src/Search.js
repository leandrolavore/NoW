import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPrevQuerys} from './redux/action.js'
import {bindActionCreators} from 'redux'
import store from './redux/store.js'
require('dotenv').config()


const keyNews = process.env.REACT_APP_NEWS_KEY
console.log(keyNews)

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
            queryNews: [],
            previousQuerys:[],
            isLoading: true,
            showChild: false, 
        }
        this.typeQuery = this.typeQuery.bind(this)
        this.fetchQuery = this.fetchQuery.bind(this)
    }
    typeQuery(input){
       
        const {name, value} = input

        this.setState({[name]:value})
        
    }
    fetchQuery(){
        const {query} = this.state
        
        if(!query){
            return null

        }else{
            store.dispatch(getPrevQuerys(query));

            fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${keyNews}`)
            .then(res=>res.json())
            .then(data=>{this.setState({queryNews: data})})
        }
    }
    componentDidUpdate(prevProps, prevState){
        const {query, queryNews, previousQuerys} = this.state

        if(prevState.queryNews !== queryNews){
            this.setState({isLoading: false}) 
           
            this.setState({previousQuerys:[...previousQuerys, query]})
    
        }
    }
    
    render() {
        const{queryNews, isLoading} = this.state

        console.log(queryNews)
        let page;

        if(isLoading){
            
            page = (<div className="globecontainer"><img id="globe" src={require('./787.gif')} alt='Now Loading'/></div>)
        }else {
           
            page = (
                <div className="resultcontainer">
                

                <h1 className="resulttitle"><a href={queryNews.articles[0].url}>
                {queryNews.articles[0].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[1].url}>
                {queryNews.articles[1].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[2].url}>
                {queryNews.articles[2].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[3].url}>
                {queryNews.articles[3].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[4].url}>
                {queryNews.articles[4].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[5].url}>
                {queryNews.articles[5].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[6].url}>
                {queryNews.articles[6].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[7].url}>
                {queryNews.articles[7].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[8].url}>
                {queryNews.articles[8].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[9].url}>
                {queryNews.articles[9].title}</a></h1>
                <h1 className="resulttitle"><a href={queryNews.articles[10].url}>
                {queryNews.articles[10].title}</a></h1>
                
            </div>
            )
        }
      

        return (
          
            <div className="searchbackground">
            <div className="searchcontainer">
                <div className= 'box'>
            <input className="input" type="text" name="query"  
                value={this.state.query}
                onChange={(e)=>this.typeQuery(e.target)} />
                <button  className = 'searchbtn'onClick={this.fetchQuery}>Search</button>
                </div>
                {page}
                <div className='imgdiv'>
               <img className= "searchlogo" src={require('./NowLogo.png')} alt="logo is suposed to be here, not me"/> 
               </div>
            </div>
            
    
            </div>

          
         
        )
    }
}
const mapStateToProps = (state) =>{

    return {prevQuerys: state.prevQuerys}
    
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getPrevQuerys: getPrevQuerys}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Search);