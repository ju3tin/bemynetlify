import React, { useEffect,  useState } from "react"
import { connect } from "react-redux";
import Navigation from "./Navigation"
import Axios from "axios";
import { Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components'

const StyledCard = styled.div`
background-color: 
white
//#E6EAFF
//#4B3DF1
;
width: 99%;
border: 4px solid #FF5500;
display: flex;
margin: 3% 0% 3% 0%;
border-radius: 5px;
font-family: 'Roboto', sans-serif;
@media (max-width: 600px){
    flex-direction: column;
    margin: 3% 0 3% 0;
}
@media (min-width: 900px){
    width: 99.5%
}
@media (max-width: 550px){
    width: 98%;
}
`

const StyledTitle = styled.h1`
font-size: 3rem;
width: 100%;
margin: 0% 0 0% 0%;
padding: 0 2% 0 2%;
background-image: url(./assets/bwpic1.jpg);
background-position: center;
background-repeat: no-repeat;
height: 20rem;
align-items: center;
background-size: cover;
border-radius: 5px;
display: flex;
justify-content: center;
color: white;
@media (max-width: 600px){
    width: 96%;
    margin: 0;
}
`
const StyledSubtitle = styled.h3`
border-bottom: 1px solid black;
width: 80%;
font-weight: bold;
font-size: 1.5rem;
padding: 2% 0 5% 0;
color: black;
margin: 20% 0 0 10%;
`

const Dashboard = props => {

//Setting state for Users + Classes below--
const [classData, setClassData] = useState([])



useEffect(()=>{
    Axios
    .get('https://anywhere-fitness-backend.herokuapp.com/api/classes')
    .then(resp => {
        setClassData(resp.data)
        console.log("This is the Classes data: ", resp.data)
        console.log("classes test", classData)
    })
},[])

return (
    <div className="container">
    <Navigation />
    <h3>{props.user.message}</h3>
    {classData.map(c => (
        <>
        <Col sm="6">
                <StyledCard>
                    <StyledTitle>{c.class_name}</StyledTitle>
                    <div className="unflexThis">
                    <StyledSubtitle>Intensity Level : {c.class_intensity_level}</StyledSubtitle>
                    <p className="paraClass">Class Duration : {c.class_duration}</p>
                    <p className="paraClass">Location : {c.class_city}</p>
                    <p className="paraClass">Start Time : {c.start_time}</p>
                    <p className="paraClass">Class Date : {c.class_date}</p>
                    <button className="rsvp">R.S.V.P</button>
                    </div>
                </StyledCard>
                </Col>
                    </>
))}
        
    </div>
)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, {})(Dashboard)

