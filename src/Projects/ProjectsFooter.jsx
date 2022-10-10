import { CssSVG, HtmlSVG, JavascriptSVG, NextSVG, ReactSVG, SassSVG } from '../Svg'
import styles from './Projects.module.css'

const WhatsIcon = (icon) => {
  switch(icon) {
    case 'html':
      return <HtmlSVG styleSVG='E34F26' />

    case 'css':
      return <CssSVG styleSVG='1572B6' />

    case 'javascript':
      return <JavascriptSVG styleSVG='F7DF1E' />

    case 'next.js':
      return <NextSVG styleSVG='000000' />

    case 'sass':
      return <SassSVG styleSVG='CC6699' />

    default:
      return <ReactSVG styleSVG='61DAFB' />
  }
}

export const ProjectsFooter = ({tech = []}) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerUl}>
        {tech.map((t, index) =>
          <li key={index}>{WhatsIcon(t)}</li>
        )}
      </ul>
    </footer>
  )
}