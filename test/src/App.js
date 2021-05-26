import React from 'react'
import { Route, NavLink, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css'

const Home = () => <div className="card home">Home</div>
const About = () => <div className="card about">About</div>
const Projects = () => <div className="card projects">Projects</div>
const Resume = () => <div className="card resume">Resume</div>
const Contact = () => <div className="card contact">Contact</div>

const App = () => {
  const history = createBrowserHistory()
  return (
    <>
      <Router history={history}>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
