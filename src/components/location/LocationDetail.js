import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <>
      <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__animals">Animals: {location.animals?.map(animal =>
          <p>{animal.name}</p>)}</div>
        <div className="location__employees">Employees: {location.employees?.map(employee =>
        <p>{employee.name}</p>)}</div>
      </section>
    </>
  )
}