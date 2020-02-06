import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from 'styled-components'

const StyledH1 = styled.h1`
color: white;
text-shadow: -1px -1px 0 #FF5500, 1px -1px 0 #FF5500, -1px 1px 0 #FF5500, 1px 1px 0 #FF5500;
//color: black;
//color: rgb(229, 294, 255);
@media (max-width: 500px){
  margin: 5% 0 1% 0%;
}
`

const RegisterPage = props => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  })

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    // e.preventDefault()

    axiosWithAuth()
      .post("/auth/register", data)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.user.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        props.history.push("/Dashboard")
      })
      .catch(err => console.log(err))
    e.target.reset()
  }

  const changeHandler = elem => {
    setSignup({ ...signup, [elem.target.name]: elem.target.value })
    // console.log("login", signup)
  }

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <StyledH1>Register</StyledH1>
      <hr></hr>

      <label htmlFor="username">Create a Username:</label>
      <input
        onChange={changeHandler}
        placeholder="Username..."
        name="username"
        type="text"
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.username && errors.username.type === "required" && (
        <p className="starterPs">This field is required.</p>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <p className="starterPs">
          This field requires a minimum length of 2 characters.
        </p>
      )}

      <label htmlFor="email">Enter your Email:</label>
      <input
        onChange={changeHandler}
        placeholder="Email..."
        type="email"
        name="email"
        ref={register({ required: true, minLength: 5 })}
      />
      {errors.email && errors.email.type === "required" && (
        <p className="starterPs">This field is required.</p>
      )}
      {errors.email && errors.email.type === "minLength" && (
        <p className="starterPs">
          This field requires a minimum length of 5 characters.
        </p>
      )}

      <label htmlFor="password">Finally, a Password:</label>
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

      <div className="roleSelector">Select Your Role:</div>
      <select
        className="dropDownTitle"
        name="role"
        ref={register({ required: true })}
      >
        <option className="selector" value="placeholder" placeholder="Select a role...">
          Select a role....
        </option>
        <option className="selector" value="attendee">
          I'm an Attendee
        </option>
        <option className="selector" value="instructor">
          I'm an Instructor
        </option>
      </select>

      <input type="submit" className="submitButton" />
    </form>
  )
}

export default RegisterPage
