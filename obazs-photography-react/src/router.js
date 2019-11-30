import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from "./components/navBar";

import Portraits from './pages/portraits';
import Wedding from './pages/wedding';
import Landscape from './pages/landscape';
import Favorites from './pages/favorites';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'



class Router extends React.Component {
  render() {
    
    return (
      <HashRouter>
        <div>
          <NavBar />


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/portfolio/portraits">
              <Portraits />
            </Route>
            <Route path="/portfolio/wedding">
              <Wedding />
            </Route>
            <Route path="/portfolio/landscape">
              <Landscape />
            </Route>
            <Route path="/portfolio/favorites">
              <Favorites />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>


      </HashRouter>)
  }
}

export default Router;





