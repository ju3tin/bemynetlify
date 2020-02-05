import React, { useEffect,  useState } from "react"
import { connect } from "react-redux";
import Navigation from "./Navigation"
import Axios from "axios";
import { Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components'

const StyledCard = styled.div`
background-color: orange;
width: 100%;
border: 2px solid black;
display: flex;
margin: 3% 0% 3% 0%;
border-radius: 5px;
@media (max-width: 600px){
    flex-direction: column;
    margin: 3% 0 3% 0;
}
`

const StyledTitle = styled.h1`
font-size: 3rem;
width: 50%;
margin: 0 0 0 5%;
padding: 0 2% 0 2%;
background-image: url(./assets/bwpic1.jpg);
background-position: center;
background-repeat: no-repeat;
height: 19rem;
align-items: center;
background-size: cover;
border-radius: 5px;
display: flex;
justify-content: center;
color: white;
text-shadow: 1px 1px 2px black, 0 0 25px purple, 0 0 5px darkblue;
@media (max-width: 600px){
    width: 96%;
    margin: 0;
}
`
const StyledSubtitle = styled.h3`
border-bottom: 1px solid black;
font-weight: bold;
font-size: 1.5rem;
padding: 2% 0 5% 0;
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

