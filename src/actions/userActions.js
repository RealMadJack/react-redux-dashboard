import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'

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
