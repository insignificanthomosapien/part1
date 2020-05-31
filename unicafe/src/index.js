import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>  <h1>{props.text}</h1>
  
const Button = ({onClick, text}) => {
return (<button onClick = {onClick}>
  {text}
  </button>)
}

const Statistics = ({goodCount, neutralCount, badCount, allCount, averageCount, positiveCount}) => {
      let data
      if(allCount === 0){
        data = <Header text = 'No feedback given' />
      }
      else if(allCount > 0){
        data = <Statistic goodCount = {goodCount} neutralCount = {neutralCount} badCount = {badCount} allCount = {allCount} averageCount = {averageCount} positiveCount = {positiveCount} />
      }
      return(data)
    }

const Statistic = (props) => {
    const {goodCount, neutralCount, badCount, allCount, averageCount, positiveCount} = props
    return (
      <div>
        <p>Good {goodCount}</p>
        <p>Neutral {neutralCount}</p>
        <p>Bad {badCount}</p>
        <p>All {allCount}</p>
        <p>Average {averageCount}</p>
        <p>Positive {positiveCount} %</p>
      </div>
      )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    console.log('good button pressed')
    setGood(good+1)
    setAll(all+1)
  }
  
  const handleBadClick = () => {
    console.log('bad button pressed')
    setBad(bad+1)
    setAll(all+1)
  }
  
  const handleNeutralClick = () => {
    console.log('neutral button pressed')
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const average = (good-bad)/all 
  const positive = good/all * 100

  return (
    <div>
      <div>
      <Header text = 'give feedback' />
      <p>
        <Button onClick = {handleGoodClick} text = 'good' />
        <Button onClick = {handleNeutralClick} text = 'neutral' />
        <Button onClick = {handleBadClick} text = 'bad' />
      </p>
      <Statistics goodCount = {good} neutralCount = {neutral} badCount = {bad} allCount = {all} averageCount = {average} positiveCount = {positive} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)