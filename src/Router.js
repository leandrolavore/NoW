import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './Search.js'
import App from './App.js'
import Previous from './Previous.js'

const Router = () =>(
    <Switch>
    <Route exact path = '/' component = {App}/>
    <Route exact path = '/search' component = {Search}/>
    <Route exact path = '/previous' component = {Previous}/>
    </Switch>
)
   


export default Router