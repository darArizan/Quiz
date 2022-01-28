import React from 'react';
import './Header.scss';

export default function Header({points, setIndex, setData, setNextAfterPrev, setStartModal, setToggleCtrlBtn, setSelected, setCorrect, setStoredAnswers, setPoints, setIsNext, setIsPrev, setIsSubmit, isPreview, setIsPreview}) {
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
        </div> :
        <div>
          <button onClick={handleReset}>Reset</button>    
        </div>
    }
    </>
  )
}




