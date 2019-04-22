import {combineReducers} from 'redux';
import AddDaycareReducer from './AddDaycareReducer'
import TabConfigReducer from './TabConfigReducer'


export default combineReducers({
    Daycare: AddDaycareReducer,
});