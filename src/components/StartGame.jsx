import React from "react";
import styled from 'styled-components';
const Button =styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
color:white;
font-size: 16px;
font-weight: 600;
border:1 px solid white;
transition:0.4s background ease-in;
&:hover{
    background:white;
    border:1 px solid black;
    color:black;
    transition:0.3s background ease-in;
}`;
const Container=styled.div`
max-width:1180px;
display: flex; 
margin: 0 auto;
height: 100vh;
align-items: center;
.context{
    display: flex;
flex-direction: column;
align-items: flex-end;
    h1 {
    font-size: 96px;
    font-weight: 700;
    white-space: nowrap;
}

}

`;

const StartGame =({toggle})=>{
    return <Container>
        <div>
        <img src='/images/dices.png' alt='dices'/></div>
        <div className="context">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
        </Container>
}

export default StartGame