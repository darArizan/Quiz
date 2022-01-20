import React,{useState, useEffect} from 'react';
import './ControlButtons.scss';
 

export default function ControlButtons({points, index, setPoints, selected, setSelected, setIndex, data,correct, setCorrect,setStoredAnswers,storedAnswers}) {

  const correctData = {
    correctAnswers: [
      {
        id: 1,
        correct: [
          2
        ]
      },
      {
        id: 2,
        correct: [
          2,
          3
        ]
      },
      {
        id: 3,
        correct: [
          1,
          4
        ]
      }
    ]
  } 

  const[toggleCtrlBtn,setToggleCtrlBtn] = useState(false)
  
  function handleSubmit(){
    setToggleCtrlBtn(!toggleCtrlBtn)
    getCorrectAnswer(); 
   
  }
  
  function handleNext(){
    setIndex(index+1)
    setToggleCtrlBtn(!toggleCtrlBtn)
    setSelected([]);
    setCorrect([])
  }

  function getCorrectAnswer() {
   correctData.correctAnswers.filter(el => {
      if(index === el.id) { 
        setCorrect(el.correct);
      }      
    })
  }
  
  useEffect(() => {
    if(correct.length > 0){
      handlePoints()
      storeAnswers()
    }; 
  }, [correct])

  function handlePoints(){
    if(selected.sort().toString() === correct.toString()){
      setPoints(points + 1);
    }
  }
  function storeAnswers(){
   
    storedAnswers[index-1].selectedAnswers=selected
    storedAnswers[index-1].correctAnswers=correct
    setStoredAnswers(storedAnswers)


  }
  function handlePrevious(){
   
    setIndex(index-1)
    setSelected(storedAnswers[index-1].selectedAnswers)
    setCorrect(storedAnswers[index-1].correctAnswers)
  }



  return (
    <div className="quiz__buttons">

      <div>{index>1 ? <button className="quiz__button" onClick={handlePrevious}>Previous</button> : ''}</div>
      <div>{!toggleCtrlBtn ? 
        <button className="quiz__button" onClick={handleSubmit}>Submit</button> :
         index !== data.length ?
           <button onClick={handleNext} className="quiz__button">Next</button> :
           <button className="quiz__button">Preview</button>
      }</div>
    </div>
  )
}



