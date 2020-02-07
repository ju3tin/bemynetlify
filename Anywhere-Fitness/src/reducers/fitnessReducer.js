import {
  GET_CLASSES_START,
  GET_CLASSES_SUCCESS,
  GET_USER_START,
  GET_USER_SUCCESS,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  FORM_CHANGE,
  UPDATE_CLASSES_START,
  UPDATE_CLASSES_SUCCESS,
  DELETE_CLASSES_START,
  DELETE_CLASSES_SUCCESS,
  NAV_START,
  NAV_COMPLETE
} from "../actions"

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
  error: false,
  class: []
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
    case EDIT_USER_START:
      return {
        ...state,
        isLoading: true
      }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case DELETE_USER_START:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case NAV_START:
      return {
        ...state,
        isLoading: true
      }
    case NAV_COMPLETE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
