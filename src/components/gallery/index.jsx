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
      <section className={styles.gallerySection}>
        <span>Галерея</span>
        <div className={styles.gallerySectionImg}>
          <img className={styles.gallerySectionImgLaboratory} src={laboratory} alt="laboratory" />
          <img className={styles.gallerySectionImgStock} src={stock} alt="stock" />
          <img className={styles.gallerySectionImgCollider} src={collider} alt="collider" />
          <img className={styles.gallerySectionImgMicroscope} src={microscope} alt="microscope" />
          <img className={styles.gallerySectionImgBigMixer} src={bigMixer} alt="big mixer" />
          <img
            className={styles.gallerySectionImgLittleMixer}
            src={littleMixer}
            alt="little mixer"
          />
          <img
            className={styles.gallerySectionImgHamster}
            src={hamster}
            alt="hamster laboratory assistant"
          />
        </div>
      </section>
    </article>
  )
}
