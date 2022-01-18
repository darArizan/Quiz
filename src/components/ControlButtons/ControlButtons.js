import React,{useState} from 'react';
import './ControlButtons.scss';
 

export default function ControlButtons({points, index, setPoints, selected, setSelected, setIndex, data,correct, setCorrect}) {

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
        id: 2,
        correct: [
          1,
          4
        ]
      }
    ]
  } 

  const[isClicked,setIsClicked] = useState(false)

  function handleSubmit(){
    setIsClicked(!isClicked)
    getCorrectAnswer();
    setSelected([]);
  }

  function handleNext(){
    setIndex(index+1)
    setIsClicked(!isClicked)
  
  }

  function getCorrectAnswer() {
   const newArray = correctData.correctAnswers.filter(el => {
      if(index === el.id) {
          return el.correct;
      }
      setCorrect(newArray)
    })
  }

  // console.log(index,data.length);

  return (
    <div className="quiz__buttons">

      <div>{index>1 ? <button className="quiz__button" onClick={() => setIndex(index-1)}>Previous</button> : ''}</div>
    
      <div>{!isClicked ? <button className="quiz__button" onClick={handleSubmit}>Submit</button> : index !== data.length ? <button onClick={handleNext} className="quiz__button">Next</button> : <button className="quiz__button">Preview</button>}</div>
    
    </div>
  )
}



