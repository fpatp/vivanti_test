import styles from './index.module.scss'
import hamsterLaboratory from '../../assets/images/hamster_laboratory_assistant.png'
import arrow from '../../assets/icons/arrow_button.png'
import hamsterTester from '../../assets/images/hamster_laboratory_assistant_doing_tests.png'

export function Laboratory() {
  return (
    <article className={styles.laboratory}>
      <section className={styles.laboratorySlogan}>
        <div className={styles.laboratorySloganText}>
          <span>ТОЧНЫЕ РЕЗУЛЬТАТЫ</span>
          <span>ТОЧНО В СРОК</span>
        </div>
        <img
          className={styles.laboratorySloganImg}
          src={hamsterLaboratory}
          alt="hamster laboratory assistant"
        />
      </section>
      <section className={styles.laboratoryTitle}>
        <div className={styles.laboratoryTitleText}>
          Добро пожаловать в медицинскую лабораторию Kapibara<span>Lab</span>, где работают
          исключительно капибары — ваш надежный партнер в обеспечении качественной и точной
          диагностики!
        </div>
      </section>
      <section className={styles.laboratoryDescription}>
        <div className={styles.laboratoryDescriptionText}>
          <span>Лаборатория</span>
          <div>
            Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными
            капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических
            исследованиях, генетической диагностике и многом другом.
            <p>
              Мы используем современное оборудование и методики и гарантируем точность и надежность
              результатов.
            </p>
          </div>
          <button>
            Оставить заявку
            <img src={arrow} alt="arrow to the right" />
          </button>
        </div>
        <img src={hamsterTester} alt="hamster laboratory assistant doing tests" />
      </section>
    </article>
  )
}