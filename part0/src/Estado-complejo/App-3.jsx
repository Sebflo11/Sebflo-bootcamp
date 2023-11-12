import { useState } from "react"

// export const App3 = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)

//     return (
//         <div>
//             {left}
//             <button onClick={() => setLeft(left + 1)}>
//                 left
//             </button>
//             <button onClick={() => setRight(right + 1)}>
//                 right
//             </button>
//             {right}
//         </div>
//     )
// }

// export const App3 = () => {
//     const [clicks, setClicks] = useState({
//         left: 0,
//         right: 0
//     })

//     const handleLeftClick = () => {
//         const newClicks = {
//             left: clicks.left + 1,
//             right: clicks.right
//         }
//         setClicks(newClicks)
//     }

//     const handleRightClick = () => {
//         const newClicks = {
//             left: clicks.left,
//             right: clicks.right + 1
//         }
//         setClicks(newClicks)
//     }

//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {clicks.right}
//         </div>
//     )
// }

// export const App3 = () => {
//     const [clicks, setClicks] = useState({
//         left: 0,
//         right: 0
//     })

//     const handleLeftClick = () => {
//         const newClicks = {
//             ...clicks,
//             left: clicks.left + 1
//         }
//         setClicks(newClicks)
//     }

//     const handleRightClick = () => {
//         const newClicks = {
//             ...clicks,
//             right: clicks.right + 1
//         }
//         setClicks(newClicks)
//     }

//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {clicks.right}
//         </div>
//     )
// }

// export const App3 = () => {
//     const [clicks, setClicks] = useState({
//         left: 0,
//         right: 0
//     })

//     const handleLeftClick = () => {
//         setClicks({...clicks, left: clicks.left + 1})
//     }

//     const handleRightClick = () => {
//         setClicks({...clicks, right: clicks.right + 1})
//     }

//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {clicks.right}
//         </div>
//     )
// }

// const History = (props) => {
//     if(props.allClicks.length === 0) {
//         return (
//             <div>
//                 the app is used by pressing the buttons
//             </div>
//         )
//     }

//     return (
//         <div>
//             button press history: {props.allClicks.join(' ')}
//         </div>
//     )
// }

// export const App3 = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAllClicks] = useState([])

//     const handleLeftClick = () => {
//         setAllClicks(allClicks.concat('L'))
//         setLeft(left + 1)
//     }

//     const handleRightClick = () => {
//         setAllClicks(allClicks.concat('R'))
//         setRight(right + 1)
//     }

//     return (
//         <div>
//             {left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {right}
//             {/* <p>{allClicks.join(' ')}</p> */}
//             <History allClicks={allClicks} />
//         </div>
//     )
// }

// const History = (props) => {
//     if(props.allClicks.length === 0) {
//         return (
//             <div>
//                 the app is used by pressing the buttons
//             </div>
//         )
//     }

//     return (
//         <div>
//             button press history: {props.allClicks.join(' ')}
//         </div>
//     )
// }

// const Button = ({ onClick, text }) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )

// export const App3 = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAllClicks] = useState([])

//     const handleLeftClick = () => {
//         setAllClicks(allClicks.concat('L'))
//         setLeft(left + 1)
//     }

//     const handleRightClick = () => {
//         setAllClicks(allClicks.concat('R'))
//         setRight(right + 1)
//     }

//     return (
//         <div>
//             {left}
//             <Button onClick={handleLeftClick} text={'left'} />
//             <Button onClick={handleRightClick} text={'right'} />
//             {right}
//             <History allClicks={allClicks} />
//         </div>
//     )
// }

const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => {
    console.log('props value is', props)
    const { onClick, text } = props

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export const App3 = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text={'left'} />
            <Button onClick={handleRightClick} text={'right'} />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}