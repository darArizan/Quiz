import React,{useState} from 'react';
import './Quiz.scss';
import  Header from '../Header/Header'
import Content from '../Content/Content'
import ControlButtons from '../ControlButtons/ControlButtons'

export default function Quiz() {

const [points, setPoints] = useState(0)
const [index, setIndex] = useState(1)
const [selected, setSelected] = useState([])
const [correct, setCorrect] = useState([])

const toggleAnswerId = (answerId) => {
    // console.log(isClicked, answerId);
    if(selected.indexOf(answerId) == -1){
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


  const data = {
    questions: [
      {
          id: 1,
          title: "Joey doesnt share what?",
          answerOptions: [
              {
                  answerText: "clothes",
                  answerId: 1
              },
              {
                  answerText: "food",
                  answerId:2
              },
              {
                  answerText: "advice",
                  answerId: 3
              },
              {
                  answerText: "hugs",
                  answerId: 4
              }
          ]
      },
      {
        id: 2,
        title: "Joey doesnt share what2?",
        answerOptions: [
            {
                answerText: "clothes2",
                answerId: 1
            },
            {
                answerText: "food2",
                answerId:2
            },
            {
                answerText: "advice2",
                answerId: 3
            },
            {
                answerText: "hugs2",
                answerId: 4
            }
        ]
    },
    {
        id: 3,
        title: "Joey doesnt share what2?",
        answerOptions: [
            {
                answerText: "clothes3",
                answerId: 1
            },
            {
                answerText: "food3",
                answerId:2
            },
            {
                answerText: "advice3",
                answerId: 3
            },
            {
                answerText: "hugs3",
                answerId: 4
            }
        ]
    }
    ]
  }

  
  return (
    <div className="quiz">
      <Header points={points}/>
      <Content data={data} index={index} toggleAnswerId={toggleAnswerId}/>
      <ControlButtons points={points} index={index} setPoints={setPoints} selected={selected} setIndex={setIndex} data={data.questions} />
    </div>
  )
}




