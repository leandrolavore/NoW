import React, { Component } from 'react'
require('dotenv').config()

const key = process.env.REACT_APP_WEATHER_KEY
console.log(key)

export default class Weather extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
         
        }
    }


    componentDidMount(){
     
    
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
              console.log(position)
              let x = position;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&units=metric&appid=${key}`)
            .then(res=>res.json())
            .then((data)=>{this.setState({weather: data})})
            .catch(res=>console.log(res.status))

        })
    }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.weather !== prevState.weather){
          this.setState({isLoading: false})
        }
      }
     

    render() {
        const {weather, isLoading} = this.state;


        if(isLoading){
            return (
                <h1 className="weatherholder">Loading weather in your location</h1>
                
            )

        }else if (!isLoading){
            return(
                <div className="weathercontainer">
                    <table className="weathertable">
                        <tbody>
                        <tr>
                            <th><h1>{weather.name}</h1></th>
                        </tr>
                        <tr>
                        <td>Conditions: {weather.weather[0].main}</td>
                        <td>Temp.: {weather.main.temp}</td>
                        </tr>
                        <tr>
                        <td>Min: {weather.main.temp_min}</td>
                        <td>Max: {weather.main.temp_max}</td>
                        </tr>
                        </tbody>
                    </table>  
                </div>
            )
        }
        
    }
}
/**

 */