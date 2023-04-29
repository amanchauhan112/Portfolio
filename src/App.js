import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Projects from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
// import useMedia from "./assets/css/useMedia";
// import Sidebarr from './components/sidebar/Sidebar';
function App() {
  // const matches = useMedia("(min-width : 500px )");
  return (
    
    <Router>
    {/* {matches?"":<Sidebarr/>} */}

    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path='/about' exact component={About} />
      <Route path='/projects' exact  component={Projects} />
    </Switch>
    </Router>
  );
}

export default App;
