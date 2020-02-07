import React, { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { connect, useDispatch } from "react-redux"
import { GET_USER_START, GET_USER_SUCCESS } from "../actions"
import RegisterPage from "../components/RegisterPage"

import styled from "styled-components"

const StyledH1 = styled.h1`
  color: white;
  text-shadow: -1px -1px 0 #ff5500, 1px -1px 0 #ff5500, -1px 1px 0 #ff5500,
    1px 1px 0 #ff5500;
  //color: black;
  //color: rgb(229, 294, 255)
  @media (max-width: 500px) {
    margin: 5% 0 0 0%;
  }
`

const LoginPage = props => {
  const [login, setLogin] = useState({ username: "", password: "" })
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    console.log(data, "hello from data")
    e.preventDefault()
    // dispatch(loginAndGetUser(data))
    dispatch({ type: GET_USER_START })
    axios
      .post(
        "https://anywhere-fitness-backend.herokuapp.com/api/auth/login",
        data
      )
      .then(res => {
        console.log(res, data, "on submit login page")
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.user })
        localStorage.setItem("token", res.data.user.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
      })
      .catch(err => console.log(err))
      .finally(() => {
        props.history.push("/Dashboard")
        e.target.reset()
      })
  }

  const changeHandler = elem => {
    setLogin({ ...login, [elem.target.name]: elem.target.value })
    // console.log("login", login);
  }

  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <StyledH1>Log In</StyledH1>
        <hr></hr>

        <label htmlFor="username">Username:</label>
        <input
          onChange={changeHandler}
          placeholder="Username..."
          type="text"
          name="username"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p className="starterPs">This field is required.</p>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <p className="starterPs">
            This field requires a minimum length of 3 characters.
          </p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          onChange={changeHandler}
          placeholder="Password..."
          name="password"
          type="password"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p className="starterPs">This field is required.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="starterPs">
            This field requires a minimum length of 5 characters.
          </p>
        )}

        <input type="submit" className="submitButton2" />
      </form>
      <RegisterPage />
    </>
  )
}

export default LoginPage
