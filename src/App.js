import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "./pages/About/About";
import Portfolio from "./pages/Porfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import "./App.css"

function App() {
  return (
    <div className="background">
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component = { About } />
          <Route exact path="/portfolio" component = { Portfolio } />
          <Route exact path="/contact" component = { Contact } />
        </div>
      </Router>
    </div>
  );
}

export default App;
