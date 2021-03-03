import React, {useContext, useEffect, useState} from "react"
import {LocationContext} from "../location/LocationProvider"
import {EmployeeContext} from "../employee/EmployeeProvider"
import {useHistory} from "react-router-dom"

export const EmployeeForm = () => {
  const {addEmployee} = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)
  const {employees, getEmployees} = useContext(EmployeeContext)

   /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0,
    });

    const history = useHistory()

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
   useEffect(() => {
     getLocations()
   }, [])

   //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      // When changing a state object or array, always create a copy, make changes, and then set state
      const newEmployee = {...employee} //probably something else goes here
      // Animal is an object properties. Set the property to the new value using object bracket notation.
      newEmployee[event.target.id] = event.target.value
      // update state
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      employee.locationId = +employee.locationId
      const locationId = parseInt(employee.locationId)

      if (locationId === 0) {
        window.alert("Please select a location")
      } else {
        // invoke addAnimal passing animal as an argument. Once complete, change the url and display the animal list
        addEmployee(employee)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to locations: </label>
            <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control">
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}