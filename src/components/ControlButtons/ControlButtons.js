import React,{useState} from 'react';
import './ControlButtons.scss';
 

export default function ControlButtons({points,index,setPoints,selected,setIndex,data}) {

  const[isClicked,setIsClicked] = useState(false)

  function handleSubmit(){
    setIsClicked(!isClicked)
  }

  function handleNext(){
    setIndex(index+1)
    setIsClicked(!isClicked)
  
  }
  console.log(index,data.length);

  return (
    <div className="quiz__buttons">

      <div>{index>1 ? <button className="quiz__button" onClick={() => setIndex(index-1)}>Previous</button> : ''}</div>
    
      <div>{!isClicked ? <button className="quiz__button" onClick={handleSubmit}>Submit</button> : index !== data.length ? <button onClick={handleNext} className="quiz__button">Next</button> : <button className="quiz__button">Preview</button>}</div>
    
    </div>
  )
}



