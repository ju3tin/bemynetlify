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
  error: false
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
