import React, { useState } from "react";



import {  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume";

function App() {
  const [titleColor, setTitleColor] = useState("#547bcb");

  return (
    <Router>
      <div className="App">
        <Navbar titleColor={titleColor} setTitleColor={setTitleColor} />
        <Switch>
          <Route path="/:username">
            <Resume titleColor={titleColor} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;