import React, { useEffect, useState } from "react"
import { connect, useSelector, useDispatch } from "react-redux"
import Navigation from "./Navigation"
import Axios from "axios"
import { Col, Card, CardTitle, CardSubtitle } from "reactstrap"
import styled from "styled-components"
import { localStorageUser } from "../actions"

const StyledCard = styled.div`
  background-color: purple;
  border: 1px solid black;
  width: 100%;
  display: flex;
  padding: 0% 0% 0% 0;
  margin: 3% 0% 3% 0%;
  border-radius: 5px;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 3% 0 3% 0;
  }
`
const StyledTitle = styled.h1`
  font-size: 3rem;
  width: 50%;
  margin: 0 0 0 5%;
  background-color: orange;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0%;
    font-size: 2rem;
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
  const [userData, setUserData] = useState([{}])

  useEffect(() => {
    Axios.get(
      "https://anywhere-fitness-backend.herokuapp.com/api/classes"
    ).then(resp => {
      setClassData(resp.data)
      console.log("This is the Classes data: ", resp.data)
      console.log("classes test", classData)
    })
  }, [])

  return (
    <div className="container">
      <h3>{props.user.message}</h3>
      {classData.map(c => (
        <>
          <Col sm="6">
            <StyledCard>
              <StyledTitle>{c.class_name}</StyledTitle>
              <div className="unflexThis">
                <StyledSubtitle>
                  Intensity Level : {c.class_intensity_level}
                </StyledSubtitle>
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

export default connect(mapStateToProps, {})(Dashboard)
