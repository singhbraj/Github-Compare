
import {FETCH_USER_DETAILS,DELETE_USER,FETCH_USER_DETAILS_ERROR,DELETE_USER_ERROR} from '../types/types';


interface IntialState {
    loading: boolean;
    loaded: boolean;

  }
  
const initialState:IntialState={
    loading:false,
    loaded:false
}
export const dataList=(state = initialState, action)=> {
    switch (action.type) {
    case FETCH_USER_DETAILS:
        return {
            ...state,
            data:action.payload
        }
    case DELETE_USER:{
        return {
            ...state,
            delete:true
        }
    }   
      default:
        return state
    }
  }

  export default dataList;