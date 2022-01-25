import React,{useState, useEffect} from 'react';
import './ControlButtons.scss';
 

export default function ControlButtons({points, index, setPoints, selected, setSelected, setIndex, data,correct, setCorrect,setStoredAnswers,storedAnswers}) {

  const[isPrev, setIsPrev] = useState(false);
  const[toggleCtrlBtn,setToggleCtrlBtn] = useState(false)
  const[isNext, setIsNext] = useState(false)
  const[isNextAfterPrev, setNextAfterPrev] = useState(false)
  const[isSubmit, setIsSubmit] = useState(false)



  async function fetchCorrectAnswers(){
    const response = await fetch(`http://localhost:3010/correctAnswers/${index}`)
    const correctData  = await response.json()
    // console.log(correctData);
    // getCorrectAnswer(correctData)
    setCorrect(correctData.correct)
  
  }
  
  function handleSubmit(){
    setToggleCtrlBtn(!toggleCtrlBtn)
    // getCorrectAnswer();
    setIsSubmit(true);
    // handlePoints()
  }
  
  function handleNext(){
    setIndex(index+1)
    setToggleCtrlBtn(!toggleCtrlBtn)
    setIsPrev(false); 
    setIsNext(true)
    setIsSubmit(false);
    setSelected([]);
    setCorrect([]) 
  }

  function handlePrevious(){
    setIndex(index-1)
    setIsNext(false)
    setNextAfterPrev(true)
    setIsPrev(true)
    // setIsSubmit(false)
    setToggleCtrlBtn(!toggleCtrlBtn)
  }

  // function getCorrectAnswer(correctA) {
  
  //     correctArr && correctArr.filter(el => {
  //       if(index === el.id) { 
  //         setCorrect(el.correct);
  //       }      
  //     })
    
  
  // }
  
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
    if(selected.sort().toString() === correct.toString()){
      setPoints(points + 1);
    }
  }

  function storeAnswers(){
    console.log(storedAnswers,correct);
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
      console.log(storedAnswers, index);
      setSelected(storedAnswers[index-1].selectedAnswers)
      setCorrect(storedAnswers[index-1].correctAnswers) 
    }    
  },[isNext])

  
  console.log(storedAnswers);
  
  
  return (
    <div className="quiz__buttons">

      <div>{index>1 ? <button className={`quiz__button ${isPrev || !isSubmit ? 'quiz__button--disabled' : ''}`} onClick={handlePrevious}>Previous</button> : ''}</div>
      <div>{!toggleCtrlBtn && !isPrev ? 
        <button className="quiz__button" onClick={handleSubmit}>Submit</button> :
        index !== data.length ?
          <button onClick={handleNext} className="quiz__button">Next</button> :
          <button className="quiz__button">Preview</button>
      }</div>
    </div>
  )
}



                   