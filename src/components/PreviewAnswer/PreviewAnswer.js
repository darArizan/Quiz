import React from 'react'

export default function PreviewAnswer({text,stateClass}) {
    return (
        <div className={`preview__answer ${stateClass}`}>
       {text}
        </div>
    )
}
