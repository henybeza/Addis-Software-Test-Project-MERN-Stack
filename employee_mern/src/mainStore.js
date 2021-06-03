// ...
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import employeeSaga from '/redux/sagas';
import reducer from '/redux/reducer';



const initialState = {name:"", dateofbirth:"", gender:"", salary:""};




const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(reducer);

const action = type => store.dispatch({type})

// rest unchanged