
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import RootReducer from './reducers'
import RootSaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
)
// then run the saga
sagaMiddleware.run(RootSaga);
export default store;

// render the application
