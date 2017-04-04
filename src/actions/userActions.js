import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'

export function fetchUsers() {
  return function (dispatch) {
    dispatch({type: FETCH_USERS})

    axios.get('http://rest.learncode.academy/api/abon3153/dashboard1')
      .then((res) => {
        console.log(res)
        dispatch({type: FETCH_USERS_FULFILLED, payload: res.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_USERS_REJECTED, payload: err})
      })
  }
}

export function addUser(obj) {
  return {type: ADD_USER, payload: obj}
}

export function deleteUser(id) {
  return {type: DELETE_USER, payload: id}
}
