import React,{useState,useEffect} from 'react';
import  Header from '../Header/Header'
import Content from '../Content/Content'
import ControlButtons from '../ControlButtons/ControlButtons'
import StartModal from '../StartModal/StartModal';
import Preview from '../Preview/Preview';

export default function Quiz() {

const [points, setPoints] = useState(0)
const [index, setIndex] = useState(1)
const [selected, setSelected] = useState([])
const [correct, setCorrect] = useState([])
const [storedAnswers, setStoredAnswers]=useState(null)
const [data,setData] = useState(null)
const [isSubmit, setIsSubmit] = useState(false)
const [isNextAfterPrev, setNextAfterPrev] = useState(false)
const [startModal, setStartModal] = useState(false)
const [isPrev, setIsPrev] = useState(false);
const [isNext, setIsNext] = useState(false)
const [toggleCtrlBtn,setToggleCtrlBtn] = useState(false)
const [isPreview, setIsPreview] = useState(false);
const [timer, setTimer] = useState(false);
const [time, setTime] = useState(5);
const [disabled,setDisabled] = useState(false);
const [countDown,setCountDown] = useState(null)

// console.log(points, correct, selected, index, startModal, storedAnswers, data, isPrev, isNext, isSubmit, isNextAfterPrev, toggleCtrlBtn);


    async function fetchData(){
        const response = await fetch("http://localhost:3000/questions")
        const newData = await response.json()
        setData(newData)
    }

    const toggleAnswerId = (answerId) => {
        if(selected.indexOf(answerId) === -1){
            setSelected([...selected, answerId])
        }else{
            const newSelected = selected.filter((current, index) => {
                if (current !== answerId) {     
                    return current;
                }          
                return false;          
                });
        
                setSelected(newSelected);
        }
    }

    useEffect(()=>{
        if(data){
            setStoredAnswers(data)
        }
      
    },[data])

    useEffect(()=>{
        if(startModal) {
            fetchData()
        }
    },[startModal])



    return (
        <>
        {!isPreview ?
        <div className="quiz">
            <StartModal startModal={startModal} setStartModal={setStartModal} timer={timer} setTimer={setTimer}/>
            <Header points={points} setSelected={setSelected} setCorrect={setCorrect} 
            setIndex={setIndex} setStartModal={setStartModal} setData={setData}
            toggleCtrlBtn={toggleCtrlBtn} setToggleCtrlBtn={setToggleCtrlBtn} setNextAfterPrev={setNextAfterPrev}
            setIsNext={setIsNext} setIsPrev={setIsPrev} isSubmit={isSubmit} setIsSubmit={setIsSubmit}
            setStoredAnswers={setStoredAnswers} setPoints={setPoints} isPreview={isPreview} setIsPreview={setIsPreview}
            timer={timer} setTimer={setTimer} time={time} setTime={setTime}
            setDisabled={setDisabled} countDown={countDown} setCountDown={setCountDown} />
            <Content data={data} index={index} toggleAnswerId={toggleAnswerId}
            isNextAfterPrev={isNextAfterPrev} setNextAfterPrev={setNextAfterPrev}
            storedAnswers={storedAnswers} startModal={startModal} 
            selected={selected} correct={correct} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
            <ControlButtons points={points} index={index} 
            setPoints={setPoints} selected={selected} 
            setSelected={setSelected} setIndex={setIndex} 
            data={data} setCorrect={setCorrect} 
            toggleCtrlBtn={toggleCtrlBtn} setToggleCtrlBtn={setToggleCtrlBtn}
            setIsNext={setIsNext} isPrev={isPrev} setIsPrev={setIsPrev}
            isSubmit={isSubmit} setIsSubmit={setIsSubmit} isNext={isNext} setIsPreview={setIsPreview}
            isNextAfterPrev={isNextAfterPrev} setNextAfterPrev={setNextAfterPrev}
            correct={correct} setStoredAnswers={setStoredAnswers}storedAnswers={storedAnswers}
            timer={timer} setTimer={setTimer} time={time} setTime={setTime}
            disabled={disabled} setDisabled={setDisabled}/>
        </div>
            : 
            <div className="quiz">
            <Header points={points} setSelected={setSelected} setCorrect={setCorrect} 
            setIndex={setIndex} setStartModal={setStartModal} setData={setData}
            setToggleCtrlBtn={setToggleCtrlBtn} setNextAfterPrev={setNextAfterPrev}
            setIsNext={setIsNext} setIsPrev={setIsPrev} setIsSubmit={setIsSubmit}
            setStoredAnswers={setStoredAnswers} setPoints={setPoints} isPreview={isPreview} setIsPreview={setIsPreview}
            /> 
           <Preview storedAnswers={storedAnswers} points={points} isPreview={isPreview} />
           </div>
        }
        </>
    )
}




