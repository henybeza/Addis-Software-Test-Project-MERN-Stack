import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import reducer from './store/reducer';
//import watchCreateEmployee from'./sagas/saga';
//import watchReadEmployee from './sagas/saga';
//import watchUpdateEmployee from './sagas/saga';
//import watchDeleteEmployee from'./sagas/saga';
 
//import {Provider} from 'react-redux';
//import {createStore, applyMiddleware} from 'redux';
//import createSagaMiddlware from 'redux-saga';

//const sagaMiddleWare = createSagaMiddlware();

//const store = createStore(reducer,applyMiddleware(sagaMiddleWare));

//sagaMiddleWare.run(watchCreateEmployee);
//sagaMiddleWare.run(watchReadEmployee);
//sagaMiddleWare.run(watchUpdateEmployee);
//sagaMiddleWare.run(watchDeleteEmployee);


ReactDOM.render(
  <React.StrictMode>

 	        <App />
	
  </React.StrictMode>, document.getElementById('root')
);

