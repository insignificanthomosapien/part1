import React from 'react'
import ReactDOM from 'react-dom'

/*Creating new components to apply best practices*/

const Header = (props) => {
  return(
  <h1>
    {props.course}
  </h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}   
    </p>
  )
}


const Content = (props) => {
  return(
    <div>
      <Part part = {props.data[0].name} exercise = {props.data[0].exercises}/>
      <Part part = {props.data[1].name} exercise = {props.data[1].exercises}/>
      <Part part = {props.data[2].name} exercise = {props.data[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>
      Total Number of exercises: {props.data[0].exercises + props.data[1].exercises + props.data[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
}

  return(
    <div>
      <Header course = {course.name}/>
      <Content data = {course.parts}/>
      <Total data = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))