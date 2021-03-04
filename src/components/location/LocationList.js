import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"
import {useHistory} from "react-router-dom"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])

  return (
    <>
      <h2>Locations</h2>

      <button onClick={() => history.pushState("/locations/create")}>
        Add Location
      </button>
      <div className="location">
        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    </>
  )
}