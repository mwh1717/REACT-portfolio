import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../../react-portfolio/src/pages/About/About";

import "./App.css"

function App() {
  return (
    <div className="background">
      <Router>
          <Route exact path="/" component={About} />
      </Router>
    </div>
  );
}

export default App;
