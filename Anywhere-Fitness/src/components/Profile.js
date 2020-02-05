import React from "react";
import { connect } from "react-redux";

const Profile = props => {
    return (
        <div>
            <h1>Profile</h1>
            <h4>username: {props.user.username}</h4>
            <p>email: {props.user.email}</p>
            <p>role: {props.user.role}</p>
            <button>edit profile</button>
            <button>delete account</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, {})(Profile)