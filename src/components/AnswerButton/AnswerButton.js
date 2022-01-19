import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnswerButton.scss';

const AnswerButton = ({text, i, id, toggleAnswerId,stateClass}) => { 
  const[clicked, setClicked] = useState(false)
 
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
 
  const handleAnswer = () => {
    toggleAnswerId(id);
    setClicked(!clicked)
  }

  return(
    <button onClick={handleAnswer} className={`content__answer ${stateClass} `}>
      {abc[i]}: {text}
    </button>
  )
};


export default AnswerButton;
