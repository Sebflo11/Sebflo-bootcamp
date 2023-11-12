import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad

    const StatisticLine = ({texto, value}) => {
        return (
            <>
                <p>{texto} {value}</p>
            </>
        )
    }

    return all > 0 ? (
        <>
            <h1>statistics</h1>
            <StatisticLine texto="good" value={good} />
            <StatisticLine texto="neutral" value={neutral} />
            <StatisticLine texto="bad" value={bad} />
            <p>all {all}</p>
            <p>average {(good - bad) / all}</p>
            <p>positive {good / all * 100} %</p>
        </>
    ) : (
        <p>No feedback given</p>
    )
}

export const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increment = (status, setStatus) => () => setStatus(status + 1) 
    
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={increment(good, setGood)} text={'good'} />
            <Button onClick={increment(neutral, setNeutral)} text={'neutral'} />
            <Button onClick={increment(bad, setBad)} text={'bad'} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}