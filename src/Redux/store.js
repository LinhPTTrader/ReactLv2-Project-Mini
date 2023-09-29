
import { applyMiddleware, combineReducers, createStore } from 'redux'
import rdcApp from './Reducer/rdcApp'

import saga from 'redux-saga' //saga
import saApp from './Saga/saApp' //saga

const mySaga = saga() //saga

const globalState = combineReducers({
    AppManage: rdcApp
})

const store = createStore(globalState, applyMiddleware(mySaga)) //saga
export default store;

mySaga.run(saApp) //saga 