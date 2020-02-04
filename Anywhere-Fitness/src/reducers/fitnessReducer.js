import { GET_CLASSES_START, GET_CLASSES_SUCCESS, GET_USER_START, GET_USER_SUCCESS } from "../actions";

const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    role: "",
    id: ""
  },
  isLoading: false,
  users: [],
  classes: [],
  error: false
}

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case GET_CLASSES_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        classes: action.payload
      }
    default:
      return state
  }
}
