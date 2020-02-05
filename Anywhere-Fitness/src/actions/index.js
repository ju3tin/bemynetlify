import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const GET_CLASSES_START = "GET_CLASSES_START"
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS"
export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const EDIT_USER_START = "EDIT_USER_START"
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
export const FORM_CHANGE = "FORM_CHANGE"
export const UPDATE_CLASSES_START = "UPDATE_CLASSES_START"
export const UPDATE_CLASSES_SUCCESS = "UPDATE_CLASSES_SUCCESS"
export const DELETE_CLASSES_START = "DELETE_CLASSES_START"
export const DELETE_CLASSES_SUCCESS = "DELETE_CLASSES_SUCCESS"

export const getClasses = () => dispatch => {
  dispatch({ type: GET_CLASSES_START })
  axiosWithAuth()
    .get("/classes")
    .then(res => {
      console.log(res)
      dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const localStorageUser = user => dispatch => {
  if (localStorage.getItem("user")) {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: JSON.parse(localStorage.getItem("user"))
    })
  } else {
    console.log("error in local storage user")
  }
}

export const loginAndGetUser = user => dispatch => {
  dispatch({ type: GET_USER_START })
  axios
    .post("https://anywhere-fitness-backend.herokuapp.com/api/auth/login", user)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_USER_SUCCESS, payload: res.data.user })
      localStorage.setItem("token", res.data.user.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
    })
    .catch(err => console.log(err))
}

export const editUser = (id, values) => dispatch => {
  dispatch({ type: EDIT_USER_START })
  axiosWithAuth()
    .put(`/users/${id}`, values)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}

export const addClass = aClass => dispatch => {
  console.log(aClass)
  dispatch({ type: UPDATE_CLASSES_START })
  axiosWithAuth()
    .post("/classes", aClass)
    .then(
      res =>
        console.log(res) &
        dispatch({ type: UPDATE_CLASSES_SUCCESS, payload: res.data })
    )
    .catch(err => console.log(err))
    .finally(() => {})
}

export const editClass = aClass => dispatch => {
  dispatch({ type: UPDATE_CLASSES_START })
  axiosWithAuth()
    .put(
      `https://anywhere-fitness-backend.herokuapp.com/api/classes/${aClass.id}`,
      aClass
    )
    .then(res => {
      dispatch({ type: UPDATE_CLASSES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      dispatch(getClasses())
    })
}
export const deleteClass = aClass => dispatch => {
  dispatch({ type: DELETE_CLASSES_START })
  axiosWithAuth()
    .delete(
      `https://anywhere-fitness-backend.herokuapp.com/api/classes/${aClass}`
    )
    .then(res => {
      dispatch({ type: DELETE_CLASSES_SUCCESS })
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      dispatch(getClasses())
    })
}
