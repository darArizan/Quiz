import React from 'react';
import AnswerButton from '../AnswerButton/AnswerButton';
import './Content.scss';


export default function Content({data, index, toggleAnswerId}) { 


  return (
    <div className="content">
      {data.questions.map(el=>{
        if(index === el.id){
          return(
            <div key={el.id} >
              <div className="content__title">{el.title}</div>
              {el.answerOptions.map((el, index) => 

                <AnswerButton i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId}/>
             )

              }
            </div>
        )}
      })}
    </div>
  )
}




