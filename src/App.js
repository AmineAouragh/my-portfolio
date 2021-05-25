import React from 'react'
import TopNav from './topnav'
import About from './about'
import Skills from './skills'
import FadeIn from 'react-fade-in'
import './App.scss'

function App() {
  return (
    <FadeIn transitionDuration={2000} delay={1000}>
      <TopNav />
      <About />
      <Skills />
    </FadeIn>
  )
}
export default App
