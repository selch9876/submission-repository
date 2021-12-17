import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {parts[0].name} exercises1 = {parts[0].exercises}
               part2 = {parts[1].name} exercises2 = {parts[1].exercises}
               part3 = {parts[2].name} exercises3 = {parts[2].exercises} />
      <Total exercises = { parts[0].exercises + parts[1].exercises + parts[2].exercises} />
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