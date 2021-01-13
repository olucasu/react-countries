import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Header from "./components/Header";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
            <Route path="/countries/:countryId">
              <Details />
            </Route>
            <Route path="/react-countries">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}





export default App;
