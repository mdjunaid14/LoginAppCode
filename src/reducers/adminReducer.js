import { FETCH_ADMIN } from '../actions/types'

const initialState = {
  admin: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADMIN:
      return {
        ...state,
        admin: action.payload
      }
    default:
      return state;
  }
}
