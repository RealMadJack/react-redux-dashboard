export const InitialState = {
  users: [],
  fetching: false,
  fetched: false,
  editing: false,
  error: null
}

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER = 'EDIT_USER'
export const SAVE_USER = 'SAVE_USER'

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
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    }
    case EDIT_USER: {
      return {
        ...state,
        editing: true
      }
    }
    case SAVE_USER: {
      return {
        ...state,
        editing: false,
      }
    }
    default: {
      break;
    }
  }

  return state
}
