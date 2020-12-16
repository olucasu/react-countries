import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
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
            <Route path="/about">
              <About />
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
