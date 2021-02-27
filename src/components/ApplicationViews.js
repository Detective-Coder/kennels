import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/Location"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {CustomerList} from "./customer/CustomerList"
import {CustomerProvider} from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
              <Route exact path="/animals">
                  <AnimalList />
              </Route>
            </AnimalProvider>

            <CustomerProvider>
              <Route path="/customers">
                  <CustomerList />
              </Route>
            </CustomerProvider>

            <EmployeeProvider>
              <Route path="/employees">
                <EmployeeList />
              </Route>
            </EmployeeProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>
        </>
    )
}