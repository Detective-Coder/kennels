import React, {useContext, useEffect, useState} from "react"
import {LocationContext} from "./LocationProvider"
import {useHistory, useParams} from "react-router-dom"

export const LocationForm = () => {
  const {addLocation, getLocationById, updateLocation} = useContext(LocationContext)

  const [location, setLocation] = useState({})

  const [isLoading, setIsLoading] = useState(true)

  const {locationId} = useParams()
    const history = useHistory()
  
  const handleControlledInputChange = (event) => {
    const newLocation = {...location}

    newLocation[event.target.name] = event.target.value

    setLocation(newLocation)
  }

  const handleSaveLocation = () => {
    if (parseInt(location.locationId) === 0) {
      window.alert("Please select a location")
    } else {
      setIsLoading(true)
      if(locationId) {
        updateLocation({
          id: location.id,
          name: location.name
        })
        .then(() => history.push(`/locations/detail/${location.id}`))
      } else {
        addLocation({
          name: location.name
        })
        .then(() => history.push("/locations"))
      }
    }
  }

  useEffect(() => {
      if (locationId) {
        getLocationById(locationId)
        .then(location => {
          setLocation(location)
          setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    
  }, [])

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" defaultValue={location.name}/>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault()
          handleSaveLocation()
        }}>
        {locationId ? <>Save Location</> : <>Add Location</>}</button>
    </form>
  )
}