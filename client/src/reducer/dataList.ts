import {
  FETCH_USER_DETAILS,
  DELETE_USER,
  FETCH_USER_DETAILS_START,
  FETCH_USER_DETAILS_ERROR,

} from "../types/types";
interface DATA {
    avatar_url: string;
    login: string;
    public_gists: number;
    public_repos: number;
    url: string;
    followers: number;
    location: string;
    id: number;
  }

interface IntialState {
  loading: boolean;
  loaded: boolean;
  error: string;
  data: DATA[];
}

const initialState: IntialState = {
  loading: false,
  loaded: false,
  data: [],
  error: " ",
};

export const dataList = (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_USER_DETAILS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_DETAILS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...state.data, action.payload],
      };
    case FETCH_USER_DETAILS_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        data:state.data.filter((data)=> {return data.id !== action.payload})
      };
    }
    default:
      return state;
  }
};

export default dataList;
