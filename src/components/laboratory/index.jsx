import styles from './index.module.scss'
import hamster from '../../assets/images/scientific_hamster.png'
import arrow from '../../assets/icons/arrow_button.png'

export function Laboratory() {
  return (
    <article id="laboratory" className={styles.laboratory}>
      <section className={styles.laboratorySlogan}>
        <div className={styles.laboratorySloganContent}>
          <div className={styles.laboratorySloganContentText}>
            <span>ТОЧНЫЕ РЕЗУЛЬТАТЫ</span>
            <span>ТОЧНО В СРОК</span>
          </div>
          <img src={hamster} alt="hamster laboratory assistant" />
        </div>
      </section>
      <section className={styles.laboratoryTitle}>
        <div className={styles.laboratoryTitleText}>
          Добро пожаловать в медицинскую лабораторию Kapibara<span>Lab</span>, где работают
          исключительно капибары — ваш надежный партнер в обеспечении качественной и точной
          диагностики!
        </div>
      </section>
      <section className={styles.laboratoryDescription}>
        <div className={styles.laboratoryDescriptionContent}>
          <span>Лаборатория</span>
          <div className={styles.laboratoryDescriptionContentImg}></div>
          <div className={styles.laboratoryDescriptionContentText}>
            Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными
            капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических
            исследованиях, генетической диагностике и многом другом.
            <p>
              Мы используем современное оборудование и методики и гарантируем точность и надежность
              результатов.
            </p>
          </div>
          <a className={styles.laboratoryDescriptionContentHref} href="#application-form">
            Оставить заявку
            <img src={arrow} alt="arrow to the right" />
          </a>
        </div>
      </section>
    </article>
  )
}
