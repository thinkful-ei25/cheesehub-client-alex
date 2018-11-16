import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions/cheese';

const initialState = {
  cheeses: []
};

export default function cheeseReducer(state=initialState, action){
  if(action.type === FETCH_CHEESE_REQUEST){

  }
  else if(action.type === FETCH_CHEESE_SUCCESS){

  }
  else if(action.type === FETCH_CHEESE_ERROR){

  }  

}