import FadeIn from 'react-fade-in'

export default function About() {
  return (
    <FadeIn className="main-section" transitionDuration={1000} delay={2500}>
       <p className="name">AMINE AOURAGH</p>
       <p className="role">
          Web Designer <br />
          Android Developer <br />
          React Native Developer
       </p>
    </FadeIn>
  )
}
