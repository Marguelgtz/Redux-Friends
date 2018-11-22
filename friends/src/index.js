import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import friendsReducer from './reducers/friendsReducer';


import './components/App.css';
import App from './components/App';

const store = createStore(friendsReducer)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));


