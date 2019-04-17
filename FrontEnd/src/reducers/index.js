import {combineReducers} from 'redux';
import AddDaycareReducer from './AddDaycareReducer'


export default combineReducers({
    Daycare: AddDaycareReducer
});