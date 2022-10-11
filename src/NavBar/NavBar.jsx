import { moveToPositionPage } from '../utils/utils'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBarUl}>
        <li onClick={() => moveToPositionPage('Projects')}>Proyectos</li>
        <li onClick={() => moveToPositionPage('AboutMe')}>Sobre mi</li>
        <li onClick={() => moveToPositionPage('Skills')}>Skills</li>
        <li onClick={() => moveToPositionPage('Academic')}>Formación</li>
        <li onClick={() => moveToPositionPage('ContactMe')}>Contáctame</li>
      </ul>
    </nav>
  )
}

export default NavBar