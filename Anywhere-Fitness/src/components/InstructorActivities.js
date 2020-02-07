import React, { useEffect } from "react"
import { Route } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getClasses, FORM_CHANGE, addClass } from "../actions/index"
import ClassesList from "./ClassesList"
import styled from "styled-components"

const TextInput = styled.input`
  width: 35%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid lightgray;
  font-size: 1.2rem;
  padding: 0 2%;
  margin: 0 3%;
  margin-top: 3%;
`

const InstructorActivities = props => {
  const dispatch = useDispatch()
  const classes = useSelector(state => state.classes)
  const aClass = useSelector(state => state.class)

  console.log(aClass)

  useEffect(() => {
    dispatch(getClasses())
  }, [])

  const handleChange = e => {
    dispatch({ type: FORM_CHANGE, name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addClass(aClass))
  }

  return (
    <div>
      {/* {!localStorage.getItem("user") && <Redirect to="/dashboard" />} */}
      <Route path="/Instructors">
        <h1>Instructor Activities</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Class Name:
            <TextInput
              type="text"
              name="class_name"
              value={aClass.class_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Class Duration:
            <TextInput
              type="text"
              name="class_duration"
              value={aClass.class_duration}
              onChange={handleChange}
            />
          </label>
          <label>
            Intensity:
            <TextInput
              type="text"
              name="class_intensity_level"
              value={aClass.class_intensity_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <TextInput
              type="text"
              name="class_city"
              value={aClass.class_city}
              onChange={handleChange}
            />
          </label>
          <label>
            Time:
            <TextInput
              type="text"
              name="start_time"
              value={aClass.start_time}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
        {classes.map((item, i) => (
          <ClassesList key={i} item={item} />
        ))}
      </Route>
    </div>
  )
}

export default InstructorActivities
