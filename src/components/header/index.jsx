import styles from './index.module.scss'
import logo from '../../assets/icons/logo.png'
import phone from '../../assets/icons/phone.png'
import { useEffect, useState } from 'react'

export function Header() {
  const [labHref, setLabHref] = useState(false)
  const [galHref, setGalHref] = useState(false)
  const [appHref, setAppHref] = useState(false)

  const observer = new IntersectionObserver(
    (item) => {
      item.forEach((el) => {
        if (el.isIntersecting && el.target.id === 'laboratory') {
          setLabHref(true)
          setGalHref(false)
          setAppHref(false)
        } else if (el.isIntersecting && el.target.id === 'gallery') {
          setLabHref(false)
          setGalHref(true)
          setAppHref(false)
        } else if (el.isIntersecting && el.target.id === 'application-form') {
          setLabHref(false)
          setGalHref(false)
          setAppHref(true)
        }
      })
    },
    {
      threshold: 0.6,
    }
  )

  useEffect(() => {
    document.querySelectorAll('article').forEach((item) => observer.observe(item))
  })

  return (
    <article id="header" className={styles.header}>
      <section className={styles.headerContent}>
        <div className={styles.headerContentLogo}>
          <img src={logo} alt="logo" />
          <span>Современные методики диагностики</span>
        </div>
        <nav className={styles.headerContentNav}>
          <a
            className={labHref ? styles.headerContentNavHrefActive : styles.headerContentNavHref}
            href="#laboratory"
          >
            Лаборатория
          </a>
          <a
            className={galHref ? styles.headerContentNavHrefActive : styles.headerContentNavHref}
            href="#gallery"
          >
            Галерея
          </a>
          <a
            className={appHref ? styles.headerContentNavHrefActive : styles.headerContentNavHref}
            href="#application-form"
          >
            Оставить заявку
          </a>
        </nav>
        <div className={styles.headerContentPhone}>
          <img src={phone} alt="phone" />
          <span>+7 123 456 7890</span>
          <span>Звонок бесплатный</span>
        </div>
      </section>
    </article>
  )
}
