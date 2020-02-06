import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
width: 50%;
@media (max-width: 600px){
    margin: 0 0 0% 0;
    width: 50%;
}
`


const Logo = () => {
    return (
        <div class="container">
        <StyledImg src={require("../LogoV2.png")} alt="picture of logo" />
        </div>
    )
}



export default Logo;