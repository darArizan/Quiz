import React,{useState, useEffect} from 'react';
 

export default function ControlButtons({points, index, setPoints, selected, setSelected, setIndex, data,correct,isNext, setIsNext, isPrev, setIsPrev, isSubmit, setIsSubmit, toggleCtrlBtn, setToggleCtrlBtn, isNextAfterPrev, setNextAfterPrev, setCorrect,setStoredAnswers,storedAnswers,setIsPreview, disabled, setDisabled, timer, setTimer, time, setTime}) {


  async function fetchCorrectAnswers(){
    const response = await fetch(`http://localhost:3010/correctAnswers/${index}`)
    const correctData  = await response.json()
    setCorrect(correctData.correct)
  }
  
  function handleSubmit(){
    setToggleCtrlBtn(!toggleCtrlBtn)
    setIsSubmit(true);
    setDisabled(false)
  }
  
  function handleNext(){
    setIndex(index+1)
    setToggleCtrlBtn(!toggleCtrlBtn)
    setIsPrev(false); 
    setIsNext(true)
    setIsSubmit(false);
    setSelected([]);
    setCorrect([]) 
    setDisabled(!disabled)
  }

  function handlePrevious(){
    setIndex(index-1)
    setIsNext(false)
    setNextAfterPrev(true)
    setIsPrev(true)
    setToggleCtrlBtn(!toggleCtrlBtn)
    setDisabled(true)
  }

  useEffect(() => {
    if(isSubmit){
      fetchCorrectAnswers() 
    }
 
  }, [isSubmit])

  useEffect(()=>{
    if(correct.length>0 && isSubmit && !isPrev){ 
      storeAnswers()
      handlePoints()
    }

  },[correct])

  function handlePoints(){
    if(selected.sort().toString() === correct.sort().toString()){
      setPoints(points + 1);
    }
  }

  function storeAnswers(){
    storedAnswers[index-1].selectedAnswers=selected
    storedAnswers[index-1].correctAnswers=correct
    setStoredAnswers(storedAnswers)
  }

  useEffect(() => {
    if(isPrev) {
      setSelected(storedAnswers[index-1].selectedAnswers)
      setCorrect(storedAnswers[index-1].correctAnswers) 
    }
  },[isPrev])

  useEffect(() => {
    if(isNext && isNextAfterPrev) {
      setSelected(storedAnswers[index-1].selectedAnswers)
      setCorrect(storedAnswers[index-1].correctAnswers)
    }    
  },[isNext])

  useEffect(() => {
    if(isNext && !toggleCtrlBtn && !isPrev) {
        setTimer(true)
        setTime(5)
    }  
  },[toggleCtrlBtn])


  if(data) {
  return (
    <div className="control">
      <div>{index>1 ? <button  disabled={disabled} className="control__button"   onClick={handlePrevious}>Previous</button> : ''}</div>
      <div>{!toggleCtrlBtn && !isPrev ? 
        <button className="control__button" onClick={handleSubmit}>Submit</button> :
        index !== data.length ?
          <button onClick={handleNext} className="control__button">Next</button> :
          <button className="control__button" onClick={()=>setIsPreview(true)}>Preview</button>
      }</div>
    </div>
  )
}
else {
  return <div>Loading...</div>
}
}



                   