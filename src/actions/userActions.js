import { FETCH_USERS } from './types'
import axios from 'axios'

export const fetchUsers = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:5000/users')
    const users = res.data
    // console.log(users)
    dispatch({ type: FETCH_USERS, payload: users });
  }
}
