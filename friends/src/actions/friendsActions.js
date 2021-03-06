import axios from 'axios';

export const FETCHING = "FETCHING";
export const GET_FRIENDS = "GET_FRIENDS";
export const ERROR = "ERROR";
export const ADDING = "ADDING";
export const ADDED = "ADDED";

export const fetchFriends = () => dispatch => {
  dispatch({type: FETCHING});
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({
        type: GET_FRIENDS,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: 'error'
      })
    })
}

//Adding a new friend

export const addFriend = friend => dispatch => {
  dispatch({type: ADDING})
    axios 
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        dispatch({type: ADDED, payload: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error})
      })
}