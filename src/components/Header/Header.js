import React from 'react';
import './Header.scss';

export default function Header({points, setIndex, setData, setStartModal, setSelected, setCorrect, setStoredAnswers, setPoints}) {
  // console.log(points);
  function handleReset() {
    setPoints(0);
    setCorrect([]);
    setSelected([]);
    setIndex(1);
    setStartModal(false);
    setStoredAnswers(null);
    setData(null);
  }

  return (
    <div>
      {points}
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}




