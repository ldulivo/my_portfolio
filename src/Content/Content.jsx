import styles from './Content.module.css'
const Content = ({ children, MaxHeight = false }) => {
  return (
    <div className={`${styles.Content} ${MaxHeight ? styles.MaxHeight : ''}`}>
      {children}
    </div>
  )
}

export default Content