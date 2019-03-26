import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "../../react-portfolio/src/pages/About/About";

import "./App.css"

function App() {
  return (
    <div className="background">
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
