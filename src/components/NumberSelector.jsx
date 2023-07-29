import React, { useState } from 'react'
import styled from 'styled-components';

const NumberSelector = ({setError,selectedNumber,setSelectedNumber,error}) => {
    const arrNumber=[1,2,3,4,5,6];
    if (selectedNumber) {
        setError(""); }
    console.log(selectedNumber);
  return (
    <NumSelectDiv>
        <p className='error'>{error}</p>
    <div className='flex'> 
        {arrNumber.map((value,i)=>(
            <Box 
            isselected={value==selectedNumber}
            key={i} onClick={() => setSelectedNumber(value)}>{value}</Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumSelectDiv>
  )
}

export default NumberSelector;
const NumSelectDiv = styled.div`
display: flex;
flex-direction:column;
align-items:end;
.error{
    color:red;
}
.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight: 400;
}`;
const Box = styled.div`
height:72px;
width:72px;
border: 1px solid black;
background: ${(props) => (props.isselected ? "black" : "white")};
color: ${(props) => (props.isselected ? "white" : "black")};
font-size:24px;
display:grid;
place-items:center;
font-weight:700;`;