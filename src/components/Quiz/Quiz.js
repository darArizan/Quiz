import React,{useState} from 'react';
import './Quiz.scss';
import  Header from '../Header/Header'
import Content from '../Content/Content'
import ControlButtons from '../ControlButtons/ControlButtons'

export default function Quiz() {

const [points, setPoints] = useState(0)
const [index, setIndex] = useState(1)
const [selected, setSelected] = useState([])


  const data = {
    questions: [
      {
          id: 1,
          title: "Joey doesnt share what?",
          answerOptions: [
              {
                  answerText: "A: clothes",
                  answerId: 1
              },
              {
                  answerText: "B: food",
                  answerId:2
              },
              {
                  answerText: "C: advice",
                  answerId: 3
              },
              {
                  answerText: "D: hugs",
                  answerId: 4
              }
          ]
      },
      {
        id: 2,
        title: "Joey doesnt share what?",
        answerOptions: [
            {
                answerText: "A: clothes",
                answerId: 1
            },
            {
                answerText: "B: food",
                answerId:2
            },
            {
                answerText: "C: advice",
                answerId: 3
            },
            {
                answerText: "D: hugs",
                answerId: 4
            }
        ]
    }
    ]
  }

  
  return (
    <div>
      <Header points={points}/>
      <Content data={data} index={index}/>
      <ControlButtons points={points} index={index} setPoints={setPoints} selected={selected}/>
    </div>
  )
}




