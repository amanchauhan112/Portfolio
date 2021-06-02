import './App.css';
import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about';
import Projects from './pages/projects';
// import Footer from './components/footer/footer';
function App() {
  return (
    
    <Router >
    
    <Navbar/>

    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path='/about' exact component={About} />
      <Route path='/projects' exact  component={Projects} />
    </Switch>

    {/* <Home/> */}
    {/* <About/>

    <Projects/> */}
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
