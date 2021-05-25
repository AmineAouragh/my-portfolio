import html from './html-image.png'
import css from './css-image.png'
import js from './javascript-image.png'
import ts from './typescript-image.png'
import react from './react-image.png'
import scss from './sass-image.png'
import bootstrap from './bootstrap-image.png'

export default function Skills() {
  return (
    <div className="section-skills">
      <h1 className="main-title">Skills</h1>
      <h2>Web Technologies</h2>
      <div>
        <img src={html} alt="HTML" width={55} height={60}/>
        <img src={css} alt="CSS" width={45} height={60} />
        <img src={js} alt="Javascript" width={50} height={50} />
        <img src={ts} alt="Typescript" width={50} height={50} />
        <img src={scss} alt="SCSS" width={70} height={50} />
        <img src={bootstrap} alt="Bootstrap" width={60} height={50} />
        <img src={react} alt="React" width={80} height={50} />
      </div>
    </div>
  )
}
