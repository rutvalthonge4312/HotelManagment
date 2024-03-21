import {combineReducers} from 'redux'
import fetchImages from '../reducers/fetchImages'


const rootReducer=combineReducers({
    fetchImages
})


export default rootReducer;