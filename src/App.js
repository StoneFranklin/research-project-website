import './App.css';
import Home from './components/Home'
import About from './components/About'
import Links from './components/Links'
import Camera from './components/Camera'
import Collaborators from './components/Collaborators'
import Contact from './components/Contact'
import Meetings from './components/Meetings'
import Publications from './components/Publications'
import MenuDrawer from './components/MenuDrawer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <MenuDrawer />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/collaborators">
            <Collaborators />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/meetings">
            <Meetings />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

