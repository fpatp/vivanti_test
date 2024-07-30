import styles from './index.module.scss'
import logo from '../../assets/icons/logo.png'
import phone from '../../assets/icons/phone.png'

export function Header() {
  return (
    <article className={styles.header}>
      <section className={styles.headerSection}>
        <div className={styles.headerSectionLogo}>
          <img src={logo} alt="logo" />
          <span>Современные методики диагностики</span>
        </div>
        <nav className={styles.headerSectionNav}>
          <a href="">Лаборатория</a>
          <a href="">Галерея</a>
          <a href="">Оставить заявку</a>
        </nav>
        <div className={styles.headerSectionPhone}>
          <img src={phone} alt="phone" />
          <span>+7 123 456 7890</span>
          <span>Звонок бесплатный</span>
        </div>
      </section>
    </article>
  )
}
