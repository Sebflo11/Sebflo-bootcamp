import { useState } from "react"

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )    
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    
    return (
        <div>
            <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </div>
    )
}

export const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }

    const [counter, setCounter] = useState(0)
   
    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>

            <div>
                <button onClick={() => setCounter(counter + 1)}>Push</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <h1>{counter}</h1>
            </div>
        </>
    )
}