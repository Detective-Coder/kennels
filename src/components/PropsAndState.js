import React from "react"

// Pass your name into a component and display it
export const PropsAndState = ({ yourName, yourLastName }) => {

  return (
    <>
      <h3>Welcome, {yourName} {yourLastName}</h3>
    </>
  )
}