import React from 'react';
import Timer from '../Timer/Timer';
import './Header.scss';

export default function Header({points, setIndex, setData, setNextAfterPrev, setStartModal, setSelected, setCorrect, setStoredAnswers, setPoints, setIsNext, setIsPrev, isSubmit, setIsSubmit, isPreview, setIsPreview, timer, setTimer, setDisabled, toggleCtrlBtn, setToggleCtrlBtn, time, setTime}) {
  // console.log(points);

  function handleReset() {
    setPoints(0);
    setCorrect([]);
    setSelected([]);
    setIndex(1);
    setStartModal(false);
    setData(null);
    setStoredAnswers(null);
    setIsPrev(false);
    setIsNext(false);
    setIsSubmit(false);
    setNextAfterPrev(false);
    setToggleCtrlBtn(false);
    setIsPreview(false)
  }


  return (
    <>
    {!isPreview ?
        <div>
          {points}
          <button onClick={handleReset}>Reset</button>
          <Timer time={time} setTime={setTime} timer={timer} setTimer={setTimer} setIsSubmit={setIsSubmit} setDisabled={setDisabled} toggleCtrlBtn={toggleCtrlBtn} setToggleCtrlBtn={setToggleCtrlBtn} isSubmit={isSubmit}/>
        </div> :
        <div>
          <button onClick={handleReset}>Reset</button>    
        </div>
    }
    </>
  )
}




