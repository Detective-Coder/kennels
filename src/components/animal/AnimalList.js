import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import {useHistory} from "react-router-dom"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  // since you are no longer always displaying all of the animals
  const [filteredAnimals, setFiltered] = useState([])
  const history = useHistory()

  //useEffect - empty dependency array - useEffect only runs after first render
  useEffect(() => {
    getAnimals()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state) 
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // if the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // if the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h2>Animals</h2>

      <button onClick={() => {history.push("/animals/create")}}>
        Make Reservation
      </button>
      <div className="animals">
        {
          filteredAnimals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
      </div>
    </>
  )
}