import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getClasses = () => dispatch => {
    dispatch({ type: GET_CLASSES_START });
    axiosWithAuth()
        .get('/classes')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const loginAndGetUser = user => dispatch => {
    dispatch({ type: GET_USER_START })
    axios.post('https://anywhere-fitness-backend.herokuapp.com/api/auth/login', user)
    .then(res => {
        console.log(res);
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.user })
        localStorage.setItem("token", res.data.user.token);
    })
    .catch(err => console.log(err))
}

// export const getUser = id => dispatch => {
//     dispatch({ type: GET_USER_START })
//     axiosWithAuth()
//         .get(`https://anywhere-fitness-backend.herokuapp.com/api/users/${id}`)
//         .then(res => {
//             console.log(res);
//             dispatch({ type: GET_USER_SUCCESS, payload: res.data.user })
//         })
//         .catch(err => console.log(err))
// }

