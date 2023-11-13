import { useState } from "react"

const Counter = ({number}) => {
    console.log('Counter render')
    return (
        <h1>{number}</h1>
    )
}


export const App = (props) => {
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        // setContador(contador + 1)
        setContador(preventContador => preventContador + 1)
    }

    const handleClickReset = () => {
        setContador(0)
    }

    const isEven = contador % 2 === 0
    const mensajePar = isEven ? 'Es par' : 'Es impar'
    return (
        <div>
            <p>El valor del contador es:</p>
            <Counter number={contador}/>
            <p>{mensajePar}</p>
            <button onClick={handleClick}>
                Incrementar
            </button>
            <button onClick={handleClickReset}>
                Reset
            </button>
        </div>
    )
}