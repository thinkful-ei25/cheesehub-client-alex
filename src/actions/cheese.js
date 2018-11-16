import { API_BASE_URL } from '../config';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type:FETCH_CHEESE_REQUEST
});


export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (data) => ({
  type:FETCH_CHEESE_SUCCESS,
  data
});


export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => ({
  type:FETCH_CHEESE_ERROR,
  error
});

export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheeseRequest());
    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => res.json())
    .then(data => dispatch(fetchCheeseSuccess(data)))
    .catch(error => dispatch(fetchCheeseError(error)))
  }
}

