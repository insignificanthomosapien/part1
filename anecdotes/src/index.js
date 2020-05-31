import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr] = useState(new Array(6).fill(0))
  const [largest, setLargest] = useState(0)

  const handleNextClick = () => {
    const rand = Math.floor(Math.random()*(6))
    setSelected(rand)
  }

  const handleVoteClick = (props) => {
    const arr = [...voteArr]
    arr[selected] += 1
    setVoteArr(arr)
    let i = 1
    let val = arr[selected]
    if(val > arr[largest]){
      setLargest(selected)
    }
  }
  console.log(voteArr)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>"{props.anecdotes[selected]}"</p>
      <p>Has {voteArr[selected]} votes</p>
      <p><Button onClick = {handleVoteClick} text = 'vote'/><Button onClick = {handleNextClick} text = 'next anecdote'/></p>
      {' '}
      <h2>Anecdote with most votes</h2>
      <p>"{anecdotes[largest]}"</p>
      <p>has {voteArr[largest]} votes</p>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)