const initialState = {
    users: {
        username: "",
        email: "",
        password: "",
        role: ""
    }
//   isLoading: false,
//   users: [],
//   error: false
// }

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    default:
      return state
  }
}
