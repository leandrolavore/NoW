import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import store from './redux/store.js'

import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import Router from './Router.js'

import Navbar from './components/Navbar.js'
import Footbar from './components/Footbar.js'



ReactDOM.render(<Provider store={store}>
<BrowserRouter> 
<Navbar />
<Router/>
<Footbar/>
</BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
