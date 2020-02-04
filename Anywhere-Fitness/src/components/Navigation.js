import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const StyledHr = styled.hr`
margin: 2% 25% 2% 0%;
`

const Navigation = () => {
    return (
        <Router>
        <div>
        <div className="flexThis">
            <Link to={"/Home"}> Home </Link>
            <Link to={"/Attendees"}> Attendees </Link>
            <Link to={"/Instructors"}> Instructors </Link>
            <Link to={"/Logout"}> Logout </Link>
        </div>
        <StyledHr />
        </div>
    </Router>
    )

};

export default Navigation;