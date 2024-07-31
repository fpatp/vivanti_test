import styles from './index.module.scss'
import littleMixer from '../../assets/images/little_mixer.png'
import collider from '../../assets/images/collider.png'
import microscope from '../../assets/images/microscope.png'
import laboratory from '../../assets/images/laboratory.png'
import bigMixer from '../../assets/images/big_mixer.png'
import hamsterTester from '../../assets/images/hamster_doing_tests.png'

export function Preview() {
  const data = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()

    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
  }

  return (
    <article className={styles.preview}>
      <div className={styles.previewCard}>
        <img src={littleMixer} alt="little mixer" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Безопасные химикаты</span>
            <span>
              Вещества, которые могут причинить вред здоровью человека или окружающей среде при
              неправильном использовании или воздействии
            </span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
      <div className={styles.previewCard}>
        <img src={collider} alt="collider" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Коллайдер</span>
            <span>
              Прибор для ускорения и столкновения заряженных частиц с целью изучения фундаментальных
              свойств материи
            </span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
      <div className={styles.previewCard}>
        <img src={microscope} alt="microscope" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Точное оборудование</span>
            <span>Позволяет получить точные результаты</span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
      <div className={styles.previewCard}>
        <img src={laboratory} alt="laboratory" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Новая лаборатория</span>
            <span>Все удобства “All inclusive”</span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
      <div className={styles.previewCard}>
        <img src={bigMixer} alt="big mixer" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Своевременная уборка</span>
            <span>Соблюдение строгих протоколов утилизации отходов</span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
      <div className={styles.previewCard}>
        <img src={hamsterTester} alt="hamster doing tests" />
        <div className={styles.previewCardDescription}>
          <div className={styles.previewCardDescriptionText}>
            <span>Пушистые лаборанты</span>
            <span>Помогают создавать уютную атмосферу в лаборатории</span>
          </div>
          <div className={styles.previewCardDescriptionButton}>
            <button>Подробнее</button>
            <span>{data()}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
