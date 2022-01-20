import React,{useEffect} from 'react';
import AnswerButton from '../AnswerButton/AnswerButton';
import './Content.scss';


export default function Content({data, index, toggleAnswerId,correct,selected}) { 


  return (
    <div className="content">
      {data.questions.map(el=>{
        if(index === el.id){
          return(
            <div key={el.id} >
              <div className="content__title">{el.title}</div>
              {el.answerOptions.map((el, index) => {
                // console.log(el);
                if(correct.toString()){
                  // console.log(selected, correct);
                  if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) !== -1){
                      // console.log("selected & correct");
                      return  <AnswerButton key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--selected-correct"}/>
                  }else if(selected.indexOf(el.answerId) !== -1 && correct.indexOf(el.answerId) == -1){
                      // console.log("selected & incorrect");
                      return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--selected-incorrect"}/>
                  }else if(selected.indexOf(el.answerId) == -1 && correct.indexOf(el.answerId) == -1){
                    // console.log("not selected & incorrect");
                    return  <AnswerButton  key={index} i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--notselected-incorrect"}/>           
                  }else{
                    // console.log("not selected & correct");
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




