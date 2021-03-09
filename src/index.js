import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel.js"
import "./index.css"

// Render a React element into the DOM in the supplied container 
// is Router the supplied container? or is document.getElementById("root")?
// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants
// You can enable strict mode for any part of your application
// StrictMode currently helps with:
// Identifying components with unsafe lifecycles
// Warning about legacy string ref API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API
ReactDOM.render(
    <React.StrictMode>
        <Router> 
            <Kennel />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
