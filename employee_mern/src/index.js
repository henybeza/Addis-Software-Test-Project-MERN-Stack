import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//REDUX and REDUX SAGA
//Create a Redux store
//Mount it with a Redux Provider
//Access it within lower React Components
//Dispatch actions from React event handlers
/*
import {Provider} from 'react-redux';

import {watchCreateEmployee} from './sagas';
import reducer from'./reducers';

import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCreateEmployee);

//END OF REDUX AND REDUX SAGA
*/
ReactDOM.render(
  <React.StrictMode>

        <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);

