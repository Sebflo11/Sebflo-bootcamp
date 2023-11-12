import React, { useState } from "react"
import { Display } from "./Display.jsx"
import { Button } from "./Button.jsx"

export const App_2 = () => {
    const [ counter, setCounter ] = useState(0)
    
    // Cada un segundo el contador suma 1
    // setTimeout(() => setCounter(counter + 1), 1000)

    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter - 1)

    console.log('rendering...', counter)

    return (
        <div>
            <Display counter={counter}/>
            <Button 
                handleClick={increaseByOne} 
                text={'plus'}   
            />
            <Button 
                handleClick={setToZero}
                text={'zero'}
            />
            <Button 
                handleClick={decreaseByOne}
                text={'minus'}
            />
        </div>
    )
}