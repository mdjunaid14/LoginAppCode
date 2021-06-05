import { combineReducers } from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'

export default combineReducers({
  users: userReducer,
  admin: adminReducer
})
