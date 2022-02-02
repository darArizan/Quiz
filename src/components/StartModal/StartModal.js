import React from 'react'
function StartModal({startModal, setStartModal, timer, setTimer}) {

    function handleStartModal() {
        setStartModal(true)
        setTimer(true);
    }

    return (
        <div className={`modal ${startModal ? 'modal--active' : ''}`}>
           <button className="modal__button" onClick={handleStartModal}>Start quiz</button> 
        </div>
    )
}

export default StartModal
