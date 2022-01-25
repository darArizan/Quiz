import React,{useEffect} from 'react';
import AnswerButton from '../AnswerButton/AnswerButton';
import './Content.scss';


export default function Content({data, index, toggleAnswerId,correct,selected}) { 

  const buttonState = {
    selectedCorrect: "content__answer--selected-correct",
    selectedIncorrect: "content__answer--selected-incorrect",
    notSelectedCorrect: "content__answer--notselected-correct",
    notSelectedIncorrect: "content__answer--notselected-incorrect"
  }

  function setButtonState(el) {
    if(correct.length) {
      if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) !== -1){
                 return buttonState.selectedCorrect;
      }
        else if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) === -1) {
          return buttonState.selectedIncorrect;
        }
        else if(selected.indexOf(el.answerId) === -1 && correct.indexOf(el.answerId) === -1) {
          return buttonState.notSelectedIncorrect;
        }
        else {
          return buttonState.notSelectedCorrect;
        }
      }
      else {
        return ""
      }
  }

  return (
    <div className="content">
      {data.questions.map(el=>{
        if(index === el.id){
          return(
            <div key={el.id} >
              <div className="content__title">{el.title}</div>
              {el.answerOptions.map((el, index) => {
                return <AnswerButton key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={setButtonState(el)}/>
              })
              }
            </div>
          )}
      })}
    </div>
  )
}




