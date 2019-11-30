import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from "./components/navBar";
import Portraits from './pages/Portraits';

const app = document.getElementById('root');

export default function Router() {
  return(
  <HashRouter>
    <div>
    <NavBar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/portfolio/portraits">
            <Portraits />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
        
          <Home />
        </Route>
      </Switch>
    </div>


  </HashRouter>)
}

  function Home() {
    return <h2>Home</h2>;
  }
  
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }