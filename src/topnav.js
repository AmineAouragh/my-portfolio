import FadeIn from 'react-fade-in'

function TopNav() {
  return (
    <div className="navbar">
      <FadeIn className="navlist" transitionDuration={500} delay={500}>
        <li className="list-item">About Me</li>
        <li className="list-item">Projects</li>
        <li className="list-item">Resume</li>
        <li className="list-item">Contact</li>
      </FadeIn>
    </div>
  )
}

export default TopNav
