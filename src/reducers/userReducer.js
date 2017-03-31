export const InitialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}


export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'

export default function reducer(state=InitialState, action) {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        fetching: true,
      }
    }
    case FETCH_USERS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
    }
    case FETCH_USERS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }
    default: {
      break;
    }
  }

  return state
}
