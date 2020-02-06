import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { editClass, deleteClass } from "../actions"

const ClassesList = props => {
  const dispatch = useDispatch()
  const editing = useSelector(state => state.editing)
  const [edit, setEdit] = useState(false)
  const [editForm, setEditForm] = useState({
    id: props.item.id,
    class_name: props.item.class_name,
    class_duration: props.item.class_duration,
    class_intensity_level: props.item.class_intensity_level,
    class_city: props.item.class_city,
    start_time: props.item.start_time
  })

  console.log(editForm)

  const handleChanges = e => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    dispatch(editClass(editForm))
  }

  return (
    <div>
      {!edit ? (
        <>
          <p>{props.item.class_name}</p>
          <p>{props.item.class_duration}</p>
          <p>{props.item.class_intensity_level}</p>
        </>
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >
          <input
            type="text"
            value={editForm.class_name}
            name="class_name"
            onChange={e => handleChanges(e)}
          />
          <input
            type="text"
            value={editForm.class_duration}
            name="class_duration"
            onChange={e => handleChanges(e)}
          />
          <input
            type="text"
            value={editForm.class_intensity_level}
            name="class_intensity_level"
            onChange={e => handleChanges(e)}
          />
          <button type="submit">Update</button>
        </form>
      )}
      <button
        onClick={() => {
          setEdit(!edit)
        }}
      >
        Edit
      </button>
      <button onClick={() => dispatch(deleteClass(props.item.id))}>
        Delete
      </button>
    </div>
  )
}
export default ClassesList
