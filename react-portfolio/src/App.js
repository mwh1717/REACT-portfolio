import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../../react-portfolio/src/pages/About/About";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
      </div>
    </Router>
  );
}

export default App;
