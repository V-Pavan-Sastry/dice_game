import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
margin-top:64px;
display: inline-flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
p{
    font-size: 16px;
    font-weight: 500;
}
h2 {
    font-size: 24px;
    font-weight: 700;
}
`;