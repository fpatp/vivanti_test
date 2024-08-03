import styles from './index.module.scss'
import laboratory from '../../assets/images/laboratory.png'
import stock from '../../assets/images/stock.png'
import collider from '../../assets/images/collider.png'
import microscope from '../../assets/images/microscope.png'
import bigMixer from '../../assets/images/big_mixer.png'
import littleMixer from '../../assets/images/little_mixer.png'
import hamster from '../../assets/images/hamster_laboratory_assistant.png'

export function Gallery() {
  return (
    <article id="gallery" className={styles.gallery}>
      <section className={styles.galleryContent}>
        <span>Галерея</span>
        <div className={styles.galleryContentImg}>
          <img className={styles.galleryContentImgLaboratory} src={laboratory} alt="laboratory" />
          <img className={styles.galleryContentImgStock} src={stock} alt="stock" />
          <img className={styles.galleryContentImgCollider} src={collider} alt="collider" />
          <img className={styles.galleryContentImgMicroscope} src={microscope} alt="microscope" />
          <img className={styles.galleryContentImgBigMixer} src={bigMixer} alt="big mixer" />
          <img
            className={styles.galleryContentImgLittleMixer}
            src={littleMixer}
            alt="little mixer"
          />
          <img
            className={styles.galleryContentImgHamster}
            src={hamster}
            alt="hamster laboratory assistant"
          />
        </div>
      </section>
    </article>
  )
}
