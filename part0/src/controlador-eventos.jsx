const Hello = (props) => {
    const name = props.name
    const age = props.age

    const bronYear = () => new Date().getFullYear() - age

    return(
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
                So you were probably bron in {bronYear()}
            </p>
        </div>
    )
}

const Hello2 = ({name, age}) => {
    const bronYear = () => new Date().getFullYear() - age

    return(
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
                So you were probably bron in {bronYear()}
            </p>
        </div>
    )
}

export const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <>
            <div>
                <h1>Greetings</h1>
                <Hello2 name="Maya" age={26 + 10} />
                <hr></hr>
                <Hello2 name={name} age={age} />
            </div>
        </>
    )
}