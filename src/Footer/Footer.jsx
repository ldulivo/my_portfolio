import { Github, Linkedin } from '../Svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
    <a href="https://www.linkedin.com/in/ldulivo/" target="_blank" rel="noopener noreferrer">
      <Linkedin />
    </a>
    <a href="https://github.com/ldulivo" target="_blank" rel="noopener noreferrer">
      <Github />
    </a>
    </footer>
  )
}

export default Footer