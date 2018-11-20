import {FETCHING, GET_FRIENDS, ERROR} from '..actions/';

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
    default:
      return state;
  }
}