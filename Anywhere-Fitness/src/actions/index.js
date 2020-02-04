import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';

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

// export const getJoke = () => dispatch => { // implicit return
//     dispatch({ type: FETCH_JOKE_START });
//     axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
//     .then(res => {
//         console.log(res);
//         dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data });
//     })
//     .catch(err => console.log(err))
// };

// export const getAnswer = answer => {
// return { type: FETCH_ANSWER_SUCCESS }
// }
