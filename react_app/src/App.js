// Main import of React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import './App.css';
import {navlinks, formData, accordionData, conversionFactors, actionData} from "./data"

// All Components import
import { Header, GridForm, 
        FAB, //ActionButton,  Action, // Last two only needed for manual creation of items
        darkColors, lightColors } from './components/common';
import { Cases } from "./cases";

function App() {


  return (
    // React Browser Router
    <Router>
      <div name="app" className="App">
        <Header className="mainHeader" navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div name="main" className="main">
          <Switch>
            {/* Main page Route */}
            <Route exact path="/">
                <div className="scope" style={{color:"white"}}>Main Page</div>
            </Route>

            {/* User Cases Route */}
            <Route exact path={navlinks[1].url}>
              <Cases />
            </Route>

            {/* Case i Route */}
            <Route exact path={[navlinks[1].url+"_1"]}>
              <div name="inputs" className="case-inputs">
                {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
                <GridForm data={formData} conversionFactors={conversionFactors} />
              </div>
            </Route>
          </Switch>
        </div>
        {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
        <FAB data={actionData} />
      </div>
    </Router>
          
  )
}

export default App;
