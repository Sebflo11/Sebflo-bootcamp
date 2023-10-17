import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const handleClickGood = () => {
        setGood(good + 1)
    }

    const handleClickNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleClickBad = () => {
        setBad(bad + 1)
    }

    return (
        <>
            <div>
                <h1>give feedback</h1>
            </div>
            <div>
                <Button onClick={handleClickGood} text={'good'} />
                <Button onClick={handleClickNeutral} text={'neutral'} />
                <Button onClick={handleClickBad} text={'bad'} />
            </div>
            <div>
                <h1>statistics</h1>
            </div>
            good {good}
            <div>
                neutral {neutral}
            </div>
            <div>
                bad {bad}
            </div>
        </>
    )
}