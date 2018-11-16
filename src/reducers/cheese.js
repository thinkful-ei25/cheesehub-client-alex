import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function cheeseReducer(state=initialState, action){
  if(action.type === FETCH_CHEESE_REQUEST){
    return {
      ...state,
      loading: true
    }

  }
  else if(action.type === FETCH_CHEESE_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      cheeses: [...action.data]
    }
  }
  else if(action.type === FETCH_CHEESE_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } 

  return state;
}