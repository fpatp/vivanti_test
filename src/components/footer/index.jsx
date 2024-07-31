import styles from './index.module.scss'
import logoFooter from '../../assets/icons/logo_footer.png'

export function Footer() {
  return (
    <article className={styles.footer}>
      <section className={styles.footerText}>
        <span>Все права защищены Российской Ассоциацией Капибар</span>
        <img src={logoFooter} alt="logo footer" />
      </section>
    </article>
  )
}
