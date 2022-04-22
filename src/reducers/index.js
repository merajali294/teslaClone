import counterreducer from './counter'
import logdata from './islogged'
import { combineReducers } from 'redux'

const allreducers = combineReducers( {
    mycount: counterreducer,
    logged: logdata
} )

export default allreducers