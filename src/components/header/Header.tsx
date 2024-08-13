import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <i className={`fa fa-regular fa-keyboard ${styles.icon}`}></i>
      <h1 className={styles.title}>Typing Speed Trainer</h1>
    </div>
  )
}

export default Header
