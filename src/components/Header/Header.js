import React, { useEffect, useState } from 'react';
import Timer from '../Timer/Timer';

export default function Header({points, setIndex, setData, setNextAfterPrev, setStartModal, setSelected, setCorrect, setStoredAnswers, setPoints, setIsNext, setIsPrev, isSubmit, setIsSubmit, isPreview, setIsPreview, timer, setTimer, setDisabled, toggleCtrlBtn, setToggleCtrlBtn, time, setTime, countDown, setCountDown}) {
 

  function handleReset() {
    setPoints(0);
    setSelected([]);
    setIndex(1);
    setStartModal(false);
    setData(null);
    setIsSubmit(false);
    setIsPrev(false);
    setCorrect([]);
    setStoredAnswers(null);
    setIsNext(false);
    setNextAfterPrev(false);
    setToggleCtrlBtn(false); 
    setTimer(false);
    setTime(5);
    clearInterval(countDown); 
    setIsPreview(false)
  }

  

  return (
    <>
    {!isPreview ?
        <div className="header">
          <div className="header__points">Points: {points}</div>
          <button className="header__reset" onClick={(handleReset)}>Reset</button>
          <Timer time={time} setTime={setTime} timer={timer} setTimer={setTimer} setIsSubmit={setIsSubmit} setDisabled={setDisabled} toggleCtrlBtn={toggleCtrlBtn} setToggleCtrlBtn={setToggleCtrlBtn} isSubmit={isSubmit} countDown={countDown} setCountDown={setCountDown}/>
        </div> :
        <div className="header header--preview">
          <button className="header__reset" onClick={handleReset}>Reset</button>    
        </div>
    }
    </>
  )
}




