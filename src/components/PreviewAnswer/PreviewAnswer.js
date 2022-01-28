import React from 'react'
import './PreviewAnswer.scss'

export default function PreviewAnswer({text,stateClass}) {
    return (
        <div className={`preview__answer ${stateClass}`}>
       {text}
        </div>
    )
}
