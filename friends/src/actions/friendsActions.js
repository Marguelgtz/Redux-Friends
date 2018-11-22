import axios from 'axios';

export const FETCHING = "FETCHING";
export const GET_FRIENDS = "GET_FRIENDS";
export const ERROR = "ERROR";

export const fetchFriends = () => dispatch => {
  dispatch({type: FETCHING});
  axios
    .get("")
}