import React,{useEffect} from 'react';
import AnswerButton from '../AnswerButton/AnswerButton';
import './Content.scss';


export default function Content({data, index, toggleAnswerId,correct,selected}) { 

  // console.log(correct);
  return (
    <div className="content">
      {data.questions.map(el=>{
        if(index === el.id){
          return(
            <div key={el.id} >
              <div className="content__title">{el.title}</div>
              {el.answerOptions.map((el, index) => {
          
                if(correct.length){
                   
                  if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) !== -1){
                    
                      return  <AnswerButton key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--selected-correct"}/>
                  }else if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) === -1){
             
                      return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--selected-incorrect"}/>
                  }else if(selected.indexOf(el.answerId) === -1 && correct.indexOf(el.answerId) === -1){
                
                    return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--notselected-incorrect"}/>           
                  }else{
                
                    return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--notselected-correct"}/>
                  }
                }else{
                  return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={""}/>
                }
              })
              }
            </div>
          )}
      })}
    </div>
  )
}




