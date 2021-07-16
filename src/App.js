import './App.css';
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Links from './components/Links'
import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/links">
            <Links />
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

