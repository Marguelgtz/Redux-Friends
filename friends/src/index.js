import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import friendsReducer from './reducers/friendsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import './components/App.css';
import App from './components/App';

const middleware = applyMiddleware(logger, thunk)

const store = createStore(friendsReducer, middleware)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));


