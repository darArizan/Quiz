import React, { useState, useEffect } from "react";
import "./Timer.scss";

function Timer({timer, setTimer, isSubmit, setIsSubmit, setDisabled, toggleCtrlBtn, setToggleCtrlBtn, time, setTime}) {

let countDown;

useEffect(() => {


if(timer){
    countDown = setInterval(() =>{
        setTime((prevTime) => {
            if (prevTime > 1) {
                return prevTime - 1
            }else{
                clearInterval(countDown);
                return 0
            }
        })
 
    }, 1000)
}
},[timer])


useEffect(() => {
   if(time === 0){
        setTimer(false)
        setIsSubmit(true)
        setToggleCtrlBtn(!toggleCtrlBtn)
        setDisabled(false)
   }else{
    console.log(timer);
    if(isSubmit){
        clearInterval(countDown);
        setTimer(false)
        setTime(0)
        setIsSubmit(true)
        setToggleCtrlBtn(!toggleCtrlBtn)
        setDisabled(false)
    }
   }
}, [time])



  return (
    <div className="timer">
      <div className="timer__caption">{time}s</div>

      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <circle r="68" cx="75" cy="75" className="timer__line"></circle>
        <circle className={`timer__counter ${timer ? "timer__counter--animate" : "" }` } r="68" cx="75" cy="75" ></circle>
      </svg>
    </div>
  );
}

export default Timer;
