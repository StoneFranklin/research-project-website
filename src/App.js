import './App.css';
import Home from './screens/Home'
import About from './screens/About'
import Links from './screens/Links'
import Camera from './screens/Camera'
import Collaborators from './screens/Collaborators'
import Contact from './screens/Contact'
import Meetings from './screens/Meetings'
import Publications from './screens/Publications'
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

