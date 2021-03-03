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
import {EmployeeForm} from "./employee/EmployeeForm"
import {AnimalDetail} from "./animal/AnimalDetail"
import {EmployeeDetail} from "./employee/EmployeeDetail"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
              <LocationProvider>
                  <CustomerProvider>
                      <Route exact path="/animals">
                          <AnimalList />
                      </Route>
                  </CustomerProvider>
              </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
              <CustomerProvider>
                <LocationProvider>
                  <Route exact path="/animals/create">
                    <AnimalForm />
                  </Route>
                  <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                  </Route>
                </LocationProvider>
              </CustomerProvider>
            </AnimalProvider>

            <CustomerProvider>
              <Route path="/customers">
                  <CustomerList />
              </Route>
            </CustomerProvider>

            <EmployeeProvider>
              <LocationProvider>
                <Route exact path="/employees">
                  <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                  <EmployeeForm />
                </Route>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                  <EmployeeDetail />
                </Route>
              </LocationProvider>
            </EmployeeProvider>

            <LocationProvider>
              <Route path="/locations">
                <LocationList />
              </Route>
            </LocationProvider>

           
        </>
    )
}