import './App.css';
import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about';
import Education from './pages/education';
import Skills from './pages/skills';
import Profile_Links from './pages/profile_links';
import Projects from './pages/projects';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router >
    
    <Navbar/>

    <Switch>
      <Route path='/education' component={Education} />
      <Route path="/" exact component={Home}></Route>
      <Route path='/about' component={About} />
      <Route path='/skills' component={Skills} />
      <Route path='/projects' component={Projects} />
      <Route path='/profile_links' component={Profile_Links} />
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
