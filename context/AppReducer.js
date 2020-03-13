import { ADD_DEATH, ADD_RECOVERED, ADD_CONFIRMED } from "./constants"

export default (state, action) => {
  switch (action.type) {
    case ADD_DEATH:
      return {
        ...state,
        death: action.payload
      }
    case ADD_RECOVERED:
      return {
        ...state,
        recovered: action.payload
      }
    case ADD_CONFIRMED:
      return {
        ...state,
        confirmed: action.payload
      }
    default:
      return state
  }
}