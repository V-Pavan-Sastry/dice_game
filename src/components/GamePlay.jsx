import React from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components'
import RoleDice from './RoleDice';
import Rules from './Rules'
import { useState } from 'react';
import { Button,OutlineButton} from './Button';
const GamePlay = () => {
    const[score,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]= useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError]=useState("");
    const [showRules,setshowRules]= useState(false);
    const roleDice = () => {
        if (!selectedNumber){
            setError("You Have Not Selected any Value") 
            return
        };
        const randomNumber = Math.floor(Math.random()*(7-1)+1);
        console.log(randomNumber)
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber==randomNumber){
            setScore((prev) => prev+randomNumber);
        }
        else{
            if (score>=2){
            setScore((prev) => prev-2);}
            else{
                setScore(0);
            }
        }
        setSelectedNumber(undefined);
    }

    const resetScore = () =>
    {
        setScore(0);
    }

  return (
    <MainContainer>
        <div className='topsection'>
            <TotalScore score={score}/>
            <NumberSelector setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className='btns'>
        <Button onClick ={()=>setshowRules((prev)=>!prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        {showRules && <Rules/>}
        </div>
     </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
.topsection{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.btns{margin-top:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
    gap:10px;
}`;