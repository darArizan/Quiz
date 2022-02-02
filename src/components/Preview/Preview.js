import React from 'react'
import PreviewAnswer from '../PreviewAnswer/PreviewAnswer'


export default function Preview({storedAnswers,points,isPreview}) {
  
    const previewState = {
        selectedCorrect: "preview__answer--selected-correct",
        selectedIncorrect: "preview__answer--selected-incorrect",
        notSelectedCorrect: "preview__answer--notselected-correct",
        notSelectedIncorrect: "preview__answer--notselected-incorrect"
      }
 
    
      function setPreviewState(correctAnswers,selectedAnswers,el) {

  
          if(selectedAnswers.indexOf(el.answerId) !== -1 && correctAnswers.indexOf(el.answerId) !== -1){
            return previewState.selectedCorrect;
          }
            else if(selectedAnswers.indexOf(el.answerId) !== -1 && correctAnswers.indexOf(el.answerId) === -1) {
              return previewState.selectedIncorrect;
            }
            else if(selectedAnswers.indexOf(el.answerId) === -1 && correctAnswers.indexOf(el.answerId) === -1) {
              return previewState.notSelectedIncorrect;
            }
            else {
              return previewState.notSelectedCorrect;
            }
         
        
      }
   
    
    return (
    <>
            <div className="preview">
                <div>{points}</div>
                    {storedAnswers.map((element,i)=>{
               return(
                <div key={i}>
                    <div>{element.title}</div>
                    {element.answerOptions.map(el=>{
                      return(
                        <PreviewAnswer text={el.answerText} stateClass={setPreviewState(element.correctAnswers,element.selectedAnswers,el)}/>
                    )
                    })}
                    
                </div>
               )
           })}
        
        </div>
        </>
    )
}
