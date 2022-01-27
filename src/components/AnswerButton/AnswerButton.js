import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AnswerButton.scss';

const AnswerButton = ({text, i, index, id, toggleAnswerId,stateClass, isNextAfterPrev, setNextAfterPrev, storedAnswers, isSubmit, setIsSubmit}) => { 

  const[clicked, setClicked] = useState(false)
  const[disabled, setDisabled] = useState(false)

  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
 
  const handleAnswer = () => {
    toggleAnswerId(id);
    setClicked(!clicked)
  }

  useEffect(() => {
    if(storedAnswers) {
      if(storedAnswers[index-1].correctAnswers || isSubmit) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }
    
  },[storedAnswers, isSubmit])
 

  return(
    <button onClick={handleAnswer} disabled={disabled} className={!clicked? `content__answer ${stateClass}`: `content__answer content__answer--selected ${stateClass}`}>
      {abc[i]}: {text}
    </button>
  )
};

export default AnswerButton;
