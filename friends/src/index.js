import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import App from './components/App';
import './components/App.css';
import friendsReducer from './reducers/friendsReducer';

const middleware = applyMiddleware(logger, thunk)

const store = createStore(friendsReducer, middleware)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));


