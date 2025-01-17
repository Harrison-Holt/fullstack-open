/* eslint-disable react/prop-types */
import { useState } from "react";

const StatisticsLine = ({text, value}) => {
  return (
  <>
  <table>
  <tbody>
    <tr>
      <th>{text}</th>
    </tr>
    <tr>
      <td>{value}</td>
    </tr>
  </tbody>
  </table>
  </>
  )
}
const Statistics = ({good, neutral, bad}) => {

    
  const total_score = ((good * 1) + (bad * -1))
  const total_feedback = (good + neutral + bad)

  const average = (total_feedback === 0 ? 0 : total_score / total_feedback)

  const positive_average = (good / total_feedback) * 100

  if(total_feedback === 0) {
    return <p>No Feeback Yet.</p>
  }

  return (
  <>
  <StatisticsLine text='good' value={good} />
  <StatisticsLine text='neutral' value={neutral} />
  <StatisticsLine text='bad' value={bad} />
  <StatisticsLine text='all' value={total_feedback} />
  <StatisticsLine text='average' value={average.toFixed(2)} />
  <StatisticsLine text='positive' value={positive_average.toFixed(2)} />
  </>
  )
}
const Button = ({onClick, text}) => {

  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App 