import React,{useState,useEffect} from 'react';
import './Quiz.scss';
import  Header from '../Header/Header'
import Content from '../Content/Content'
import ControlButtons from '../ControlButtons/ControlButtons'


export default function Quiz() {

const [points, setPoints] = useState(0)
const [index, setIndex] = useState(1)
const [selected, setSelected] = useState([])
const [correct, setCorrect] = useState([])
const [storedAnswers, setStoredAnswers]=useState(null)
const [data,setData] = useState(null)


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
        fetchData()
    },[])



    return (
        <div className="quiz">
            <Header points={points}/>
            <Content data={data} index={index} toggleAnswerId={toggleAnswerId} selected={selected} correct={correct}/>
            <ControlButtons points={points} index={index} 
            setPoints={setPoints} selected={selected} 
            setSelected={setSelected} setIndex={setIndex} 
            data={data} setCorrect={setCorrect} 
            correct={correct} setStoredAnswers={setStoredAnswers}storedAnswers={storedAnswers}/>
        </div>
    )
}




