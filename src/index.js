import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz/Quiz';
import './scss/main.scss'
function App() {
  return (
    <div>
      <Quiz/>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


