const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    role: ""
  },
  isLoading: false,
  error: {},
  users: [],
  editing: false
}

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}
