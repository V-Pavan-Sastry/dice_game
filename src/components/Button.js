import styled from 'styled-components';
export const Button =styled.button`
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
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
}`;

export const OutlineButton =styled(Button)`
 background:white;
 color:black;
 border:1px solid black;
&:hover{
    background:black;
    border:1px solid black;
    color:white;
}`;