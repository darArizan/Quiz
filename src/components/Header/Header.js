import React from 'react';
import './Header.scss';

export default function Header({points}) {
  // console.log(points);
  return (
    <div>
      {points}
      <button onClick={() => window.location.reload(false)}>Reset</button>
    </div>
  )
}




