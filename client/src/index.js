import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter } from 'react-router-dom'
// Provider is given the store as a prop
ReactDOM.render(<Provider store={ store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


serviceWorker.unregister();

//Provider is a React component given to us by the “react-redux” library.
//It serves just one purpose : to “provide” the store to its child components.
