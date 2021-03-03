import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import {useHistory} from "react-router-dom"
import {LocationContext} from "../location/LocationProvider"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
    .then(getEmployees)

  }, [])

  const history = useHistory()

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => {history.push("/employees/create")}}>
        Add Employee
      </button>
      <div className="employee">
        {console.log("EmployeeList: Render", employees)}
        {
          employees.map(employee => {
            const clinic = locations.find(l => l.id === parseInt(employee.locationId))

            return <EmployeeCard key={employee.id} employee={employee} location={clinic}/>
          })
        }
      </div>
    </>
  )
}