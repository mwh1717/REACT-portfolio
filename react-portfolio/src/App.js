import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "../../react-portfolio/src/pages/About/About";
import Portfolio from "../../react-portfolio/src/pages/Porfolio/Portfolio";

import "./App.css"

function App() {
  return (
    <div className="background">
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component = { About } />
          <Route exact path="/portfolio" component = { Portfolio } />
        </div>
      </Router>
    </div>
  );
}

export default App;
