import React, { useState } from "react";
import { connect } from "react-redux";

import { editUser } from "../actions";

const Profile = props => {
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState({
        username: props.user.username,
        email: props.user.email,
        role: props.user.role,
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log(user);
        e.preventDefault();
        console.log(props.user.id);
        props.editUser(props.user.id, user);
        setEditMode(false);
    }

    return (
        <div>
            <div>
            <h1>Profile</h1>
            <h4>username: {props.user.username}</h4>
            <p>email: {props.user.email}</p>
            <p>role: {props.user.role}</p>
            <button onClick={() => setEditMode(true)}>edit profile</button>
            <button>delete account</button>
            </div>

            {editMode && <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={user.username} onChange={handleChanges} />
                    <input type="text" name="email" value={user.email} onChange={handleChanges} />
                    <input type="text" name="role" value={user.role} onChange={handleChanges} />
                    <button type="submit">confirm</button>
                    <button onClick={() => setEditMode(false)}>cancel</button>
                </form>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, { editUser })(Profile)