import React,{useEffect} from 'react';
import AnswerButton from '../AnswerButton/AnswerButton';
import './Content.scss';


export default function Content({data, index, toggleAnswerId,createAnswerButtons,correct,selected}) { 

  useEffect(()=>{
    if(correct.length>0){
      createAnswerButtons(el)
    }

    }
    
    ,[correct])
  return (
    <div className="content">
      {data.questions.map(el=>{
        if(index === el.id){
          return(
            <div key={el.id} >
              <div className="content__title">{el.title}</div>
              {el.answerOptions.map((el, index) => {

  if(selected.indexOf(el.id) !== -1 && correct.indexOf(el.id) !== -1){
      return  <AnswerButton  i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} stateClass={"content__answer--selected-correct"}/>
  }else{
      return  <AnswerButton  i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId} />
  }
}


                // <AnswerButton  i={index} text={el.answerText} id={el.answerId} toggleAnswerId={toggleAnswerId}/>
             )

              }
            </div>
        )}
      })}
    </div>
  )
}




