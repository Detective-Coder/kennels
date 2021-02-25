import React, {useState} from "react"

// Pass your name into a component and display it
export const PropsAndState = ({ yourName, yourLastName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    // good practice:
    // make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} {yourLastName}</h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}