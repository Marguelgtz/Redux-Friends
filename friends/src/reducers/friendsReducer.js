import {FETCHING, GET_FRIENDS, ADDING, ADDED, ERROR} from '../actions/friendsActions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriends: false,
  friendsSaved: false,
  updatingFriend: false,
  friendsUpdated: false,
  deletingFriend: false,
  friends: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingFriends: true})
    case GET_FRIENDS:
      return Object.assign({}, state, {friends: action.payload, fetchingFriends:false}
      )
    case ERROR:
      return Object.assign({}, state, {error: action.payload, fetchingFriends: false})
    case ADDING: 
        return Object.assign({}, state, {updatingFriend: true} )
    case ADDED: 
        return Object.assign({}, state, {updatingFriend: false, friends: [...state.friends, ...action.payload]})
    default:
      return state;
  }
}