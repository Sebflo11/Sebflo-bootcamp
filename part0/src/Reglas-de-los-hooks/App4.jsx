import { useState } from "react"

//EJEMPLO DE LO QUE ESTA BIEN Y MAL
// export const App4 = () => {
//     //estos estan bien
//     const [age, setAge] = useState(0)
//     const [name, setName] = useState('Sebastián Flores')

//     if(age > 10){
//         //esto no funciona
//         const [foobar, setFoobar] = useState(null)
//     }

//     for (let i = 0; i < age; i++) {
//         //también esto no está bien
//         const [rightWay, setRightWay] = useState(false)
//     }

//     const notGood = () => {
//         // y esto también es ilegal
//         const [x, setX] = useState(-1000)
//     }

//     return (
//         //...
//     )
// }

export const App4 = () => {
    const [value, setValue] = useState(10)

    const handleClick = () => {
        console.log('clicked the button')
        setValue(0)
    }

    return (
        <div>
            {value}
            <button onClick={handleClick} >reset to zero</button>
        </div>
    )
}

export const App5 = () => {
    const [value, setValue] = useState(10)

    const hello = () => {
        const handle = () => console.log('hello wold')
        return handle
    }

    // const hello2= (who) => {
    //     const handler = () => {
    //         console.log('hello wold', who)
    //     }
    //     return handler
    // }

    const hello2= (who) =>() => {
        console.log('hello wold', who)
    }

    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    return (
        <>
            <div>
                <button onClick={hello}>button</button>
                <button onClick={hello2('world')}>button</button>
                <button onClick={hello2('react')}>button</button>
                <button onClick={hello2('function')}>button</button>
            </div>
            <div>
                {value}
                <button onClick={setToValue(1000)}>thousand</button>
                <button onClick={setToValue(0)}>reset</button>
                <button onClick={setToValue(value + 1)}>increment</button>
            </div>
        </>
    )
}