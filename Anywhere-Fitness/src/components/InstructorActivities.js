import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useSelector, useDispatch } from "react-redux"
import {
  getClasses,
  FORM_CHANGE,
  addClass,
  localStorageUser
} from "../actions/index"
import ClassesList from "./ClassesList"

const InstructorActivities = props => {
  const dispatch = useDispatch()
  const classes = useSelector(state => state.classes)
  const aClass = useSelector(state => state.class)

  console.log(classes)

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
            <input
              type="text"
              name="class_name"
              value={aClass.class_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Class Duration:
            <input
              type="text"
              name="class_duration"
              value={aClass.class_duration}
              onChange={handleChange}
            />
          </label>
          <label>
            Intensity:
            <input
              type="text"
              name="class_intensity_level"
              value={aClass.class_intensity_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="class_city"
              value={aClass.class_city}
              onChange={handleChange}
            />
          </label>
          {/* <label>
            Date:
            <input
              type="text"
              name="class_date"
              value={aClass.class_date}
              onChange={handleChange}
            />
          </label> */}
          <label>
            Time:
            <input
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
