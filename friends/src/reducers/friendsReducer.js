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

export default (state = initialState, action) {
  switch (action.type) {
    case value:
      return 
    default:
      break;
  }
}