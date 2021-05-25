import FadeIn from 'react-fade-in'

export default function About() {
  return (
    <FadeIn className="main-section" transitionDuration={700} delay={500}>
       <p className="name">AMINE AOURAGH</p>
       <p className="role">
          Web Designer <br />
          Android Developer <br />
          React Native Developer
       </p>
    </FadeIn>
  )
}
