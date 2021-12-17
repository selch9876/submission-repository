import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1.name} exercises1 = {part1.exercises}
               part2 = {part2.name} exercises2 = {part2.exercises}
               part3 = {part3.name} exercises3 = {part3.exercises} />
      <Total exercises = { part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
     <h1>{props.course}</h1> 
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
     <p>{props.part1} {props.exercises1}</p>
     <p>{props.part2} {props.exercises2}</p>
     <p>{props.part3} {props.exercises3}</p> 
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
     <p>Number of exercises {props.exercises} </p> 
    </>
  )
}

export default App