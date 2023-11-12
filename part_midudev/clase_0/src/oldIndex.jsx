import { useState } from "react"

const WarningNotUsed = () => {
    return <h1>Todavía no se ha usado el el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(", ")}</p>
}

export const OldIndex = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        // clicks: 0,
        mensaje: 'Mensaje en el estado'
    })

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        const newCountersState = {
            ...counters, //aqui nos vamos a guradar todas las propiedades que esta en counters
            left: counters.left + 1,
            // right: counters.right, // Este lo sacamos porque ya lo vamos a cargar
            // clicks: counters.clicks + 1 // Lo sacamos porque lo podemos obtener desde clicks array
        }
        setCounters(newCountersState);
        setClicks(prevClicks => {
            return (
                // prevClicks.concat('L')
                ([...prevClicks, 'L'])
            )
        })
    }

    const handleClickRight = () => {
        setCounters({
            ...counters,
            // left: counters.left,
            right: counters.right + 1,
            // clicks: counters.clicks + 1
        })
        setClicks(prevClicks => {
            return prevClicks.concat('R')
        })
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>
                left
            </button>
            <button onClick={handleClickRight}>
                right
            </button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            <p>{counters.mensaje}</p>
            {clicks.length === 0
                ? (<WarningNotUsed /> )
                :
                (<ListOfClicks clicks={clicks}/>)
            }
        </div>
    )
}