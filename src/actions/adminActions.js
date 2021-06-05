import { FETCH_ADMIN } from './types'
import axios from 'axios'

export const fetchAdmin = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:5000/admin')
    const admin = res.data
    // console.log(users)
    dispatch({ type: FETCH_ADMIN, payload: admin });
  }
}
