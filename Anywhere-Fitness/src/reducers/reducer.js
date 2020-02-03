const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    role: ""
  },
  isLoading: false,
  error: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
