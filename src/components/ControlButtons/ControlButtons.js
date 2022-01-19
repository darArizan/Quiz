import React,{useState, useEffect} from 'react';
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
        id: 3,
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
    

  }
  
  function handleNext(){
    setIndex(index+1)
    setIsClicked(!isClicked)
    setSelected([]);
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
    }; 
  }, [correct])

  function handlePoints(){
    if(selected.sort().toString() === correct.toString()){
      setPoints(points + 1);
    }
  }


  return (
    <div className="quiz__buttons">

      <div>{index>1 ? <button className="quiz__button" onClick={() => setIndex(index-1)}>Previous</button> : ''}</div>
    
      <div>{!isClicked ? <button className="quiz__button" onClick={handleSubmit}>Submit</button> : index !== data.length ? <button onClick={handleNext} className="quiz__button">Next</button> : <button className="quiz__button">Preview</button>}</div>
    
    </div>
  )
}



