const initialState = {
    isLoading: false,
    registration: {
        "username": "",
        "email": "",
        "password": "",
        "role": ""
    },
    error: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}