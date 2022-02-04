import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz/Quiz';
import './scss/main.scss'
function App() {
  return (
  
      <Quiz/>
   
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


