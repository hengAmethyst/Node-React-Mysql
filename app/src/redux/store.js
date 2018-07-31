import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initialState = {name: '蒋恒'}
const enhancers = []
const middleware = [thunk]
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)



export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
)