import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {CustomerList} from "./customer/CustomerList"
import {CustomerProvider} from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import {AnimalForm} from "./animal/AnimalForm"
import {LocationForm} from "./location/LocationForm"
import {EmployeeForm} from "./employee/EmployeeForm"
import {AnimalDetail} from "./animal/AnimalDetail"
import {EmployeeDetail} from "./employee/EmployeeDetail"
import {LocationDetail} from "./location/LocationDetail"
import {AnimalSearch} from "./animal/AnimalSearch"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
              <CustomerProvider>
                <LocationProvider>
                  <EmployeeProvider>
                    <Route exact path="/animals">
                      <AnimalSearch />
                      <AnimalList />
                    </Route>
                    <Route exact path="/animals/create">
                      <AnimalForm />
                    </Route>
                    <Route exact path="/animals/detail/:animalId(\d+)">
                      <AnimalDetail />
                    </Route>
                    <Route path="/customers">
                      <CustomerList />
                    </Route>
                    <Route exact path="/employees">
                      <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                      <EmployeeForm />
                    </Route>
                    <Route exact path="/employees/detail/:employeeId(\d+)">
                      <EmployeeDetail />
                    </Route>
                    <Route exact path="/locations">
                      <LocationList />
                    </Route>
                    <Route exact path="/locations/detail/:locationId(\d+)">
                      <LocationDetail />
                    </Route>
                    <Route exact path="/locations/edit/:locationId(\d+)">
                      <LocationForm />
                    </Route>
                    <Route path="/animals/edit/:animalId(\d+)">
                      <AnimalForm />
                    </Route>
                  </EmployeeProvider>
                </LocationProvider>
              </CustomerProvider>
            </AnimalProvider>

            
        </>
    )
}