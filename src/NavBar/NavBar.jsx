import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBarUl}>
        <li>Proyectos</li>
        <li>Sobre mi</li>
        <li>Skills</li>
        <li>Formación</li>
        <li>Contáctame</li>
      </ul>
    </nav>
  )
}

export default NavBar