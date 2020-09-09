import { combineReducers } from 'redux';
import DataList from './dataList';
const appReducer=combineReducers({
Data:DataList
});
export default appReducer;