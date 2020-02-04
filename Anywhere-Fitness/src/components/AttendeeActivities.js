import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getClasses } from "../actions";

const AttendeeActivities = props => {
    useEffect(() => {
        props.getClasses();
    }, [])

    console.log(props.classes);
    
    return (
        <div>
            <h1>Attendee Activities</h1>
            <div>
                {props.classes.map(c => (
                    <p>{c.class_name}</p>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

export default connect (mapStateToProps, { getClasses })(AttendeeActivities);